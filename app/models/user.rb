# frozen_string_literal: true

##
# A user
#
class User < ApplicationRecord
  ##
  # Associations
  #
  has_many :wissle
  has_many :tag, :through => :interest
  has_many :wissle, :through => :comment
  has_many :wissle, :through => :subscription

  ##
  # Validations
  #
  validates :uuid,
            :presence => true,
            :format => { :with => /\A[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\Z/i },
            :uniqueness => true

  validates :username,
            :presence => true,
            :format => { :with => /\A[A-Za-z0-9]+\Z/i },
            :length => { :in => 2..20 }

  validates :age,
            :numericality => { :greater_than_or_equal_to => 18, :less_than_or_equal_to => 99 }

  ##
  # Callbacks
  #
  after_initialize :generate_uuid

  ##
  # Methods
  #
  ##
  # Overrides
  #
  ##
  # Helpers and callback methods
  #
  private

  def generate_uuid
    return if uuid?

    self.uuid = SecureRandom.uuid
  end
end
