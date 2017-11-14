# frozen_string_literal: true

class TagsController < ApplicationController
  before_action :authenticate!
  before_action :set_tag, only: [:show, :destroy]

  # GET /tags
  def index
    @resources = Tag.all
    render :index
  end

  # GET /:id
  def show
  # set_tag
    render :show
  end

  # POST /
  def create
    @resource = Tag.new(tag_params)

    if @resource.save
      render :show, :status => :created
    else
      render :show, :status => :unprocessable_entity
    end
  end

  # post /:id ---but its not a feature for user to delete tags.
  def destroy
  # set_tag
  end

  private

  def set_tag
    @resource = Tag.find(params[:id])
  end

  def tag_params
    params.require(:tag).permit(:user_id, :title)
  end
end
