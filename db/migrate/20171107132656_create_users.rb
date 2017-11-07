# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :uuid
      t.string :username, :null => false, :default => ''
      t.integer :age

      t.timestamps
    end

    add_index :users, :uuid, :unique => true
  end
end
