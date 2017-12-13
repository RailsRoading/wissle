# frozen_string_literal: true

module Api
  class TagsController < ApiController
    before_action :authenticate!

    # GET /tags
    def index
      @resources = Tag.all
      render :index
    end

    # GET /:id
    def show
      @resource = Tag.find(params[:id])
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

    private

    def tag_params
      params.require(:data).permit(:user_id, :title)
    end
  end
end
