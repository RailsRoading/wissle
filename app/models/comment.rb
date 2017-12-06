# frozen_string_literal: true

class Comment < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :wissle
  belongs_to :user
  ##
  # Validations
  #
  validates :text,
            :presence => true,
            :length => { :in => 2..500 }
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
