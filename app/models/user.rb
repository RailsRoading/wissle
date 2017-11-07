# frozen_string_literal: true

##
# A user
#
class User < ApplicationRecord
  ##
  # Associations
  #

  ##
  # Validations
  #
  validates :uuid,
            :presence => true,
            :format => { :with => /\A[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\Z/i },
            :uniqueness => true

  validates :username,
            :presence => true,
            :format => { :with => /\A[A-Za-z0-9]+\Z/i }

  validates :age,
            :numericality => { :greater_than_or_equal_to => 18, :less_than_or_equal_to => 99 }

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
