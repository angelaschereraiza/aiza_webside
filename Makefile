.PHONY: deploy_test
deploy_test:
	npm run build
	rsync -av --delete dist/ zollihood.ch:test/htdocs/

.PHONY: deploy
deploy:
	npm run build
	rsync -av --delete dist/ zollihood.ch:_/htdocs/

