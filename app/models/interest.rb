# frozen_string_literal: true

##
# Join model for User and Tag
#
class Interest < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :tag
  belongs_to :user

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
