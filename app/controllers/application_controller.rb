# frozen_string_literal: true

class ApplicationController < ActionController::API
  attr_accessor :current_user

  before_action :ensure_json_request

  protected

  ##
  # Enforce authentication (request Authorization header should be set to a user's uuid)
  #
  def authenticate!
    @current_user = User.find_by :uuid => request.headers['Authorization']

    head :unauthorized unless current_user
  end

  private

  def ensure_json_request
    return if request.format == :json
    head :not_acceptable
  end
end
