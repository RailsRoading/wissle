# frozen_string_literal: true

Rails.application.routes.draw do
  ##
  # API endpoints
  #
  scope :api, :constraints => { :format => :json } do
    # /api/users
    resources :users, :only => %i[create show update]
    # /api/wissles
    resources :wissles, :only => %i[create show destroy index]
  end
end
