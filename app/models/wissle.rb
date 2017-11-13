# frozen_string_literal: true

class Wissle < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :user

  ##
  # Validations
  #
  validates :longitude,
            :presence => true

  validates :latitude,
            :presence => true

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
