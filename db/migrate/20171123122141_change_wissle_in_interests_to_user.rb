# frozen_string_literal: true

class ChangeWissleInInterestsToUser < ActiveRecord::Migration[5.1]
  def change
    remove_index :interests, :wissle_id
    remove_column :interests, :wissle_id
    add_column :interests, :user_id, :integer
    add_index :interests, :user_id
  end
end
