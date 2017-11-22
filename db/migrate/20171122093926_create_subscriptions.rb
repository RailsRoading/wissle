# frozen_string_literal: true

class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions, &:timestamps
  end
end
