# frozen_string_literal: true

class Tag < ApplicationRecord
  ##
  # Associations
  #
  has_many :user, :through => :interest
  ##
  # Validations
  #
  validates :title,
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