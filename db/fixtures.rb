require 'factory_bot'
require 'faker'

Dir[File.join __dir__, '../spec/factories/*.rb'].each { |f| require_relative f }

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

ActiveRecord::Base.transaction do
  ##
  # Users
  #
  FACTOR.times do
    FactoryBot.create :user
  end

  ##
  # Wissles
  #
  factory = RGeo::Geographic.spherical_factory :srid => 4326
  FACTOR.times do
    location = AALBORG_LOCATIONS.sample

    Wissle.create :user => User.offset(rand(User.count)).first,
                  :location => factory.point(location[:latitude], location[:longitude]),
                  :text => Faker::Lorem.words(5).join(' ')
  end
end
