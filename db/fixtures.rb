require 'factory_bot'
require 'faker'

Dir[File.join __dir__, '../spec/factories/*.rb'].each { |f| require_relative f }

# Sample size
FACTOR = 10

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
    Wissle.create :user => User.offset(rand(User.count)).first,
                  :location => factory.point(Faker::Address.latitude, Faker::Address.longitude),
                  :text => Faker::Lorem.words(20).join(' ')
    >>>>>>> Add seed Wissles
  end
end
