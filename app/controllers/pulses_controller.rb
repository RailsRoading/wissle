# frozen_string_literal: true

class PulsesController < ApplicationController
  before_action :authenticate!

  # POST /
  def create
    @resource = Pulse.new pulse_params

    if @resource.valid?
      render :show, :status => :created
    else
      render :show, :status => :unprocessable_entity
    end
  end

  private

  def pulse_params
    params.require(:data).permit :latitude,
                                 :longitude
  end
end
