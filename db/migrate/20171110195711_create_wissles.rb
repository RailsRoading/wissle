# frozen_string_literal: true

class CreateWissles < ActiveRecord::Migration[5.1]
  def change
    create_table :wissles do |t|
      t.text :text
      t.float :longitude
      t.float :latitude
      t.references :user, :foreign_key => true

      t.timestamps
    end
  end
end
