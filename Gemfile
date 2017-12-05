# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.2'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

group :development do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', :platform => %i[mri mingw x64_mingw]

  # Debugger
  gem 'debase', '~> 0.2.1'

  # Process runner
  gem 'foreman'

  # Git hooks
  gem 'overcommit'

  # Enforce code style using Rubocop
  gem 'rubocop', :require => false

  # Check for vulnerable versions of gems
  gem 'bundler-audit', :require => false

  # Detect code smells
  gem 'reek', :require => false

  # Analyze potential speed improvements
  gem 'fasterer', :require => false

  # Check for valid JSON syntax
  gem 'json', :require => false

  # Security vulnerability scanner
  gem 'brakeman', :require => false
end

group :test do
  # Behaviour-driven testing
  gem 'rspec'
  gem 'rspec-rails'

  # Rails RSpec matchers
  gem 'shoulda-matchers', :git => 'https://github.com/thoughtbot/shoulda-matchers.git', :branch => 'rails-5'

  # Factory pattern for testing
  gem 'factory_bot'
  gem 'factory_bot_rails'

  # Fake data generator
  gem 'faker'

  # Reset database
  gem 'database_cleaner'

  # Coverage
  gem 'coveralls'
  gem 'simplecov'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', :platforms => %i[mingw mswin x64_mingw jruby]
