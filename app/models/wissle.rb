# frozen_string_literal: true

class Wissle < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :users
  has_one :category
  has_many :commented_users, :through => :comment, :class_name => 'User'
  has_many :subscribed_users, :through => :subscription, :class_name => 'User'

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
