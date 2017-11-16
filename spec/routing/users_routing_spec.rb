# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'users routing', :type => :routing do
  it 'routes users endpoint' do
    route = '/api/users'

    expect(:get => route).not_to be_routable
    expect(:patch => route).not_to be_routable
    expect(:put => route).not_to be_routable
    expect(:post => route).to route_to 'users#create'
    expect(:delete => route).not_to be_routable
  end

  it 'routes user endpoint' do
    route = '/api/users/foo'

    expect(:get => route).to route_to 'users#show', :id => 'foo'
    expect(:patch => route).to route_to 'users#update', :id => 'foo'
    expect(:put => route).to route_to 'users#update', :id => 'foo'
    expect(:post => route).not_to be_routable
    expect(:delete => route).not_to be_routable
  end
end
