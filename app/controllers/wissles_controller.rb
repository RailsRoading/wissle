# frozen_string_literal: true

class WisslesController < ApplicationController
  before_action :authenticate!

  # GET /wissles
  def index
    @resource = Wissle.all

    render :index
  end

  # POST /
  def create
    @resource = Wissle.new wissle_params

    if @resource.save
      render :show, :status => :created
    else
      render :show, :status => :unprocessable_entity
    end
  end

  # GET /:id
  def show
    @resource = Wissle.find params[:id]

    render :show
  end

  # PUT/PATCH /:id
  def update
    @resource = Wissle.find params[:id]

    # Allow current_user only to update his/her own wissles
    return head :forbidden unless @resource && @resource.user == current_user

    if @resource.update wissle_params
      render :show
    else
      render :show, :status => :unprocessable_entity
    end
  end

  private

  def wissle_params
    params.require(:data).permit :user_id,
                                   :text,
                                   :longitude,
                                   :latitude
  end
end
