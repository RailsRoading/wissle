# frozen_string_literal: true

class Tag < ApplicationRecord
  ##
  # Associations
  #
  has_many :interests
  has_many :users, :through => :interests
  ##
  # Validations
  #
  validates :title,
            :presence => true,
            :length => { :in => 2..30 }
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
