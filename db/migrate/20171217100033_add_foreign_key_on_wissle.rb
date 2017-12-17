# frozen_string_literal: true

class AddForeignKeyOnWissle < ActiveRecord::Migration[5.1]
  def change
    add_column :wissles, :category_id, :integer
    add_index :wissles, :category_id
  end
end
