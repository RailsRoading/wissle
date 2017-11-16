# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User API', :type => :request do
  let(:user) { create :user }

  let(:headers) do
    {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json',
      'Authorization' => user.uuid
    }
  end

  let(:params) do
    {
      :data => build(:user).attributes.slice('username', 'age')
    }.to_json
  end

  describe 'POST /' do
    it 'has a happy path' do
      post users_path, :params => params, :headers => headers.except('Authorization')

      expect(response.status).to eq 201

      json = JSON.parse(response.body)['data']

      expect(json['username']).to eq User.last.username
      expect(json['age']).to eq User.last.age
      expect(json['uuid']).to eq User.last.uuid
    end
  end

  describe 'GET /:id' do
    it 'rejects an invalid id' do
      get user_path(:id => 0), :headers => headers

      expect(response.status).to eq 404
    end

    it 'rejects unauthorized' do
      get user_path(:id => user.id), :headers => headers.except('Authorization')

      expect(response.status).to eq 401
    end

    it 'has a happy path' do
      get user_path(:id => user.id), :headers => headers

      expect(response.status).to eq 200

      json = JSON.parse(response.body)['data']

      expect(json['username']).to eq user.username
      expect(json['age']).to eq user.age
    end
  end

  describe 'PUT/PATCH /' do
    it 'rejects unauthorized' do
      alt_user = create :user
      patch user_path(:id => alt_user.id), :params => params, :headers => headers

      expect(response.status).to eq 403
    end

    it 'has a happy path' do
      patch user_path(:id => user.id), :params => params, :headers => headers

      expect(response.status).to eq 200
    end
  end
end
