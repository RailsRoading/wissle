# frozen_string_literal: true

require 'factory_bot'
require 'faker'

# Sample size
FACTOR = 10

AALBORG_LOCATIONS = [
  { :latitude => 57.04803459355453, :longitude => 9.924922735473615 },
  { :latitude => 57.04775739214735, :longitude => 9.922170789024335 },
  { :latitude => 57.04997786322149, :longitude => 9.918914587280256 },
  { :latitude => 57.05023170625475, :longitude => 9.917364270469648 },
  { :latitude => 57.0456505938393, :longitude => 9.922267348548871 },
  { :latitude => 57.04177517353267, :longitude => 9.904629142066938 },
  { :latitude => 57.020888220961794, :longitude => 9.884764702102643 },
  { :latitude => 57.01593551840158, :longitude => 9.977590591690046 },
  { :latitude => 57.05499896459077, :longitude => 9.87136975028227 },
  { :latitude => 57.0620466168205, :longitude => 9.906646163246137 },
  { :latitude => 57.04895955591169, :longitude => 9.921527058860761 }
].freeze

WISSLES = [
  { :text => 'Going for coffee', :category => 'Coffee' },
  { :text => 'Deathwood', :category => 'Concert' },
  { :text => 'Casual Sunday Breakfast', :category => 'Breakfast' },
  { :text => 'Listening to jazz', :category => 'Music' },
  { :text => 'Going out 2nite', :category => 'Nightlife' },
  { :text => 'Doing laundry', :category => 'Service' },
  { :text => 'Walking the dog', :category => 'Pets' },
  { :text => 'Tabletop game night', :category => 'Games' },
  { :text => 'Visiting the Utzon Center', :category => 'Museum' },
  { :text => 'Going for a walk', :category => 'Nature' },
  { :text => 'Christmas Goodbye Party', :category => 'Party' },
  { :text => 'Basketball', :category => 'Sports' },
  { :text => 'Tapdancing class', :category => 'Dance' },
  { :text => 'Sunday service', :category => 'Religion' }
].freeze

ActiveRecord::Base.transaction do
  ##
  # Categories
  #
  %w[Art Automotive Breakfast Business Clothing Coffee Community Computer Concert Dance Drinks Education Electronics Engineering Entertainment Event Exhibition Fashion Festival Financial Food Games Halloween Internet Jewelry Karaoke Literature Meetup Movie Museum Music Nature Nightlife Party Pets Photography Pizza Pool Religion Restaurant Science Service Shopping Sports Television Tourism Travel Other].each do |title|
    Category.create :title => title
  end

  ##
  # Users
  #
  FACTOR.times do
    FactoryBot.create :user
  end

  ##
  # Wissles
  #
  (FACTOR * 2).times do
    location = AALBORG_LOCATIONS.sample
    wissle = WISSLES.sample

    Wissle.create :user => User.offset(rand(User.count)).first,
                  :latitude => location[:latitude],
                  :longitude => location[:longitude],
                  :category => Category.find_by(:title => wissle[:category]),
                  :text => wissle[:text]
  end
end
