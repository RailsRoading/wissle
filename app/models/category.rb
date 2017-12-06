# frozen_string_literal: true

##
# Wissle category
#
class Category < ApplicationRecord
  ##
  # Associations
  #
  has_many :wissles

  ##
  # Validations
  #
  ##
  validates :title,
            :uniqueness => true

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
