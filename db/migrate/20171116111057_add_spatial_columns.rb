# frozen_string_literal: true

class AddSpatialColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :wissles, :longitude
    remove_column :wissles, :latitude
    add_column :wissles, :location, :st_point, :geographic => true
  end
end
