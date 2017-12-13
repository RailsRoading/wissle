# frozen_string_literal: true

if comment.errors.any?
  json.errors comment.errors.full_messages
else
  json.data do
    json.id comment.id
    json.text comment.text
    json.user comment.user, :partial => 'users/user', :as => :user
  end
end
