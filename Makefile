# ====== Configuration ======
HOST                    ?= aiza.ch
NPM_DIR                 ?= frontend
NPM_BUILD               ?= bash -lc '\
  cd "$(NPM_DIR)" && \
  if [ -f package-lock.json ]; then \
    npm ci --no-fund --no-audit; \
  else \
    echo "[warn] package-lock.json not found in $(NPM_DIR) – using npm install"; \
    npm install --no-fund --no-audit; \
  fi && npm run build \
'

TEST_SUBDIR             ?= test/htdocs/
PROD_SUBDIR             ?= _/htdocs/
SSH                     = ssh $(HOST)
RSYNC                   = rsync -av --delete
COMPOSE                 ?= docker compose
SHELL 					:= /bin/bash
REMOTE_COMPOSE_DIR      ?= aiza-ai

# llama.cpp + proxy ports (also mirrored in .env)
LLAMA_PORT              ?= 8000
PROXY_PORT              ?= 9000

# ====== Full deployment helpers ======
.PHONY: run_all
run_all: run_frontend backend_up
	@echo "Deploy all done: Frontend deployed + Backend (local) up."

.PHONY: deploy_all
deploy_all_remote: deploy_frontend deploy_backend
	@echo "Deploy all done: Frontend deployed + Backend (remote NAS) up."

# ====== Frontend ======
.PHONY: run_frontend
run_frontend:
	cd frontend && npm run dev -- --host --port 5173

.PHONY: deploy_test_frontend
deploy_test_frontend:
	$(NPM_BUILD)
	$(RSYNC) $(NPM_DIR)/dist/ $(HOST):$(TEST_SUBDIR)

.PHONY: deploy_frontend
deploy_frontend:
	$(NPM_BUILD)
	$(RSYNC) $(NPM_DIR)/dist/ $(HOST):$(PROD_SUBDIR)

# ====== Backend (LOCAL): docker compose up/down/logs ======
# Requires: docker + docker compose, docker-compose.yml at repo root,
# backend/ai/{Dockerfile,proxy.py,requirements.txt}, and a .env
.PHONY: backend_up
backend_up:     ## Build and start llama.cpp + proxy locally
	$(COMPOSE) up -d --build

.PHONY: backend_down
backend_down:   ## Stop and remove local containers
	$(COMPOSE) down

.PHONY: backend_restart
backend_restart:## Restart local services
	$(COMPOSE) restart

.PHONY: backend_logs
backend_logs:   ## Tail logs
	$(COMPOSE) logs -f --tail=200

.PHONY: backend_ps
backend_ps:     ## Show status
	$(COMPOSE) ps

.PHONY: backend_health
backend_health: ## Quick health checks against llama.cpp and proxy
	@echo "llama.cpp /health:" && curl -s http://127.0.0.1:$(LLAMA_PORT)/health || true
	@echo && echo "proxy /health:" && curl -s http://127.0.0.1:$(PROXY_PORT)/health || true

.PHONY: backend_test
backend_test:   ## Smoke test via proxy
	@curl -s http://127.0.0.1:$(PROXY_PORT)/chat \
	  -H 'Content-Type: application/json' \
	  -d '{"message":"Gib eine kurze C#-Methode, die prim prüft.","max_tokens":200}' | jq .

# ====== Backend (REMOTE): deploy compose + start on NAS ======
# Rsyncs docker-compose.yml + backend/ai/* + .env to the NAS and runs "docker compose up -d" there.
.PHONY: deploy_backend
deploy_backend:
	$(SSH) "mkdir -p '$(REMOTE_COMPOSE_DIR)/backend/ai'"
	$(RSYNC) docker-compose.yml $(HOST):$(REMOTE_COMPOSE_DIR)/
	$(RSYNC) backend/ai/ $(HOST):$(REMOTE_COMPOSE_DIR)/backend/ai/
	@if [ -f .env ]; then \
	  $(RSYNC) .env $(HOST):$(REMOTE_COMPOSE_DIR)/.env ; \
	else \
	  echo "[warn] .env not found locally - remote compose will use its own env"; \
	fi
	$(SSH) "cd '$(REMOTE_COMPOSE_DIR)' && $(COMPOSE) up -d --build"

.PHONY: remote_backend_down
remote_backend_down:
	$(SSH) 'cd $(REMOTE_COMPOSE_DIR) && $(COMPOSE) down || true'

.PHONY: remote_backend_logs
remote_backend_logs:
	$(SSH) 'cd $(REMOTE_COMPOSE_DIR) && $(COMPOSE) logs -f --tail=200'

.PHONY: remote_backend_ps
remote_backend_ps:
	$(SSH) 'cd $(REMOTE_COMPOSE_DIR) && $(COMPOSE) ps'

.PHONY: remote_backend_health
remote_backend_health:
	$(SSH) 'curl -s http://127.0.0.1:$(LLAMA_PORT)/health || true'
	$(SSH) 'curl -s http://127.0.0.1:$(PROXY_PORT)/health || true'

