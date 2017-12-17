# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.transaction do
  %w[
    Art
    Automotive
    Breakfast
    Business
    Clothing
    Coffee
    Community
    Computer
    Concert
    Dance
    Drinks
    Education
    Electronics
    Engineering
    Entertainment
    Event
    Exhibition
    Fashion
    Festival
    Financial
    Food
    Games
    Halloween
    Internet
    Jewelry
    Karaoke
    Literature
    Meetup
    Movie
    Museum
    Music
    Nature
    Nightlife
    Party
    Pets
    Photography
    Pizza
    Pool
    Religion
    Restaurant
    Science
    Service
    Shopping
    Sports
    Television
    Tourism
    Travel
    Other
  ].each do |title|
    Category.create! :title => title
  end
end
