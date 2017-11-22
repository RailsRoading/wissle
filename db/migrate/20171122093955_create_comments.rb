# frozen_string_literal: true

class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :text
      t.references :user
      t.references :wissle

      t.timestamps
    end
  end
end
