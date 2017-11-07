# Wissle

Wissle is an app where you can announce what you are doing in order to meet people with similar interests.

## Installation

### Prerequisites

- RVM
- NPM

### Dependencies

```
$ rvm install $(cat .ruby-version)
$ rvm gemset create $(cat .ruby-gemset)
$ rvm use $(cat .ruby-version)@$(cat .ruby-gemset)
$ gem install bundler
$ bundle install
$ cd web
$ npm install yarn
$ yarn install
```

### Execution

Run the Rails and the webpack server

```
$ foreman start
```

### Development

Enable automated code style checking

```
$ overcommit --install
```
