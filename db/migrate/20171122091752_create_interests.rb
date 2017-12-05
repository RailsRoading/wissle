# frozen_string_literal: true

class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.references :tag
      t.references :wissle

      t.timestamps
    end
  end
end
