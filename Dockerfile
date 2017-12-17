FROM ruby:2.4.1-slim
MAINTAINER Florian Dejonckheere <florian@floriandejonckheere.be>

##
# Create user and group
#
RUN useradd wissle --create-home --home-dir /app/ --shell /bin/false

WORKDIR /app/
ENV RAILS_ENV production

##
# Install Ruby dependencies
#
COPY Gemfile Gemfile.lock /app/
RUN gem install bundler
RUN bundle install --deployment --without development test

##
# Add application
#
COPY . /app/

##
# Build public assets
#
RUN bundle exec rails assets:precompile

##
# Run application
#
CMD /app/docker-entrypoint.sh
