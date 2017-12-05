# frozen_string_literal: true

require 'securerandom'

FactoryBot.define do
  factory :user do
    username { Faker::Internet.user_name.gsub(/[^a-z0-9]/i, '') }
    age { Faker::Number.between 18, 35 }
    uuid { SecureRandom.uuid }
  end
end
