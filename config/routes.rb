# frozen_string_literal: true

Rails.application.routes.draw do
  ##
  # API endpoints
  #
  scope :api, :constraints => { :format => :json } do
    # /api/users
    resources :users, :only => %i[create show update]
  end
end
