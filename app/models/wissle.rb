# frozen_string_literal: true

class Wissle < ApplicationRecord
  ##
  # Associations
  #
  belongs_to :user
  belongs_to :category

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

  validates :longitude,
            :presence => true

  validates :latitude,
            :presence => true

  validates :category,
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
