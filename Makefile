.PHONY: deploy deploy_test serve

RSYNC_EXCLUDES = --exclude '.git' --exclude '.gitignore' --exclude 'README.md' --exclude 'Makefile'

deploy:
	rsync -av --delete $(RSYNC_EXCLUDES) . aiza.ch:/var/www/aiza.ch/

deploy_test:
	rsync -av --delete $(RSYNC_EXCLUDES) . aiza.ch:/var/www/test.aiza.ch/

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"
