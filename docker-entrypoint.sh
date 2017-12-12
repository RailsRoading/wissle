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
bundle exec rake db:migrate

# Copy assets
[[ ! -d /app/public/ ]] && mkdir -p /app/public/
rm -rf /app/public/*
cp -r /app/web/build/* /app/public/

# Start app server
bundle exec puma -b unix:///app/tmp/sockets/puma.sock
