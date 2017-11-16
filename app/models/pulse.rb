# frozen_string_literal: true

class Pulse
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  def initialize(params)
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  end

  ##
  # Properties
  #
  attr_accessor :latitude,
                :longitude

  ##
  # Associations
  #
  def wissles
    # TODO: Return list of nearby Wissles
    []
  end

  ##
  # Validations
  #
  validates :latitude,
            :numericality => { :greater_than_or_equal_to => -90, :less_than_or_equal_to => 90 }

  validates :longitude,
            :numericality => { :greater_than_or_equal_to => -180, :less_than_or_equal_to => 180 }

  ##
  # Callbacks
  #
  ##
  # Methods
  #
  ##
  # Overrides
  #
  ##
  # Helpers and callback methods
  #
end
