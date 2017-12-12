FROM ruby:2.4.1-slim
MAINTAINER Florian Dejonckheere <florian@floriandejonckheere.be>

##
# Create user and group
#
RUN useradd wissle --create-home --home-dir /app/ --shell /bin/false

##
# Install package dependencies
#
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      curl

# Node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

# Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo 'deb https://dl.yarnpkg.com/debian/ stable main' | tee /etc/apt/sources.list.d/yarn.list

# Install packages
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
    build-essential nodejs libpq-dev libsqlite3-dev cmake pkg-config git yarn

WORKDIR /app/
ENV RAILS_ENV production

##
# Install Ruby dependencies
#
COPY Gemfile Gemfile.lock /app/
RUN gem install bundler
RUN bundle install --deployment --without development test

##
# Install Node dependencies
#
COPY web/package.json web/yarn.lock /app/web/
RUN cd /app/web/ && yarn install

##
# Add application
#
COPY . /app/

##
# Build public assets
#
RUN cd /app/web && REACT_APP_API_URL=http://localhost:3000 yarn build

##
# Run application
#
CMD /app/docker-entrypoint.sh
