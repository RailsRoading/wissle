# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :authenticate!

  # GET /:wissle_id/comments
  def index
    @resources = wissle.comments
    render :index
  end

  # POST /:wissle_id/comments
  def create
    new_params = comment_params.merge(:wissle_id => params[:wissle_id])
                               .merge(:user_id => current_user.id)
    @resource = Comment.new new_params

    if @resource.save
      render :show, :status => :created
    else
      render :show, :status => :unprocessable_entity
    end
  end

  # DELETE /:wissle_id/comments/:id
  def destroy
    @resource = Comment.find params[:id]

    # Allow current_user only to delete his/her own comments and the comments on his/her own wissles
    return head :forbidden unless @resource&.user == current_user || wissle.user == current_user
    @resource.destroy!

    head :no_content
  end

  private

  def comment_params
    params.require(:data).permit :user_id,
                                 :text
  end

  def wissle
    @wissle ||= Wissle.find(params[:wissle_id])
  end
end
