#!/bin/bash
#
# docker-entrypoint.sh - Start server
#

# Correct permissions
chown -R wissle:wissle /app/

# Remove stale lock files
rm -f /app/tmp/pids/server.pid

# Run as regular user
su - wissle

# Migrate relational data
bundle exec rails db:migrate

# Seed database
bundle exec rails db:seed

# Build assets
bundle exec rails assets:clobber
bundle exec rails assets:precompile

# Start app server
bundle exec puma -b unix:///app/tmp/sockets/puma.sock