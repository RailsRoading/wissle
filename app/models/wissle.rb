# frozen_string_literal: true

class Wissle < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :user
  has_one :category

  has_many :comments
  has_many :subscriptions

  has_many :commented_users,
           :through => :comments,
           :class_name => 'User'

  has_many :subscribed_users,
           :through => :subscriptions,
           :class_name => 'User'

  ##
  # Validations
  #
  validates :text,
            :presence => true,
            :length => { :in => 2..200 }

  validates :location,
            :presence => true

  ##
  # Callbacks
  #
  ##
  # Methods
  #
  scope :near, lambda { |latitude, longitude, distance|
    where "ST_Distance(location,'POINT(#{longitude} #{latitude})') < #{distance}"
  }

  #
  # Overrides
  #
  ##
  # Helpers and callback methods
  #
end
