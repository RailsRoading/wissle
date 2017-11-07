# frozen_string_literal: true

class UsersController < ApplicationController
  # POST /
  def create
    @resource = User.new user_params

    if @resource.save
      @show_uuid = true
      render :show, :status => :created
    else
      render :show, :status => :unprocessable_entity
    end
  end

  # GET /:id
  def show
    @resource = User.find params[:id]

    render :show
  end

  # PUT/PATCH /:id
  def update
    @resource = User.find params[:id]

    if @resource.update user_params
      render :show
    else
      render :show, :status => :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit :username,
                                 :age
  end
end
