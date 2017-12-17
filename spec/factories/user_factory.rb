# frozen_string_literal: true

require 'securerandom'

FactoryBot.define do
  factory :user do
    username { Faker::Name.first_name }
    age { Faker::Number.between 18, 35 }
    uuid { SecureRandom.uuid }
  end
end
