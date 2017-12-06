# frozen_string_literal: true

##
# Join model for User and Wissle
#
class Subscription < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :user
  belongs_to :wissle

  ##
  # Validations
  #
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
