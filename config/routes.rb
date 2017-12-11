# frozen_string_literal: true

Rails.application.routes.draw do
  ##
  # API endpoints
  #
  scope :api, :constraints => { :format => :json } do
    ##
    # Users
    #
    resources :users, :only => %i[create show update]

    ##
    # Wissles
    #
    resources :wissles, :only => %i[create show destroy index] do
      resources :comments, :only => %i[create destroy index]
    end

    ##
    # Tags
    #
    resources :tags, :only => %i[create index show]
  end
end
