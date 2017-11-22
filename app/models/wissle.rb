# frozen_string_literal: true

class Wissle < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :user
  has_one :category
  has_many :user, :through => :comment
  has_many :user, :through => :subscription

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
