# frozen_string_literal: true

class Category < ApplicationRecord
  ##
  # Associations
  #
  has_many :wissle
  ##
  # Validations
  #
  ##
  validates :title,
            :format => { :with => /\A[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\Z/i },
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
