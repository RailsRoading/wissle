# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :ensure_json_request

  rescue_from ActiveRecord::RecordNotFound, :with => :render_not_found

  protected

  ##
  # Enforce authentication (request Authorization header should be set to a user's uuid)
  #
  def authenticate!
    head :unauthorized unless current_user
  end

  private

  def current_user
    @current_user ||= User.find_by :uuid => request.headers['Authorization']
  end

  def ensure_json_request
    return if request.format == :json
    head :not_acceptable
  end

  ##
  # Render 404 errors
  #
  def render_not_found
    render :json => { :errors => ["resource with id '#{params[:id]}' not found"] }, :status => :not_found
  end
end
