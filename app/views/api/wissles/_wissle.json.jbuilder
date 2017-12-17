# frozen_string_literal: true

if wissle.errors.any?
  json.errors wissle.errors.full_messages
else
  json.data do
    json.id wissle.id
    json.longitude wissle.longitude
    json.latitude wissle.latitude
    json.text wissle.text
    json.user wissle.user, :partial => 'api/users/user', :as => :user
    json.created_at wissle.created_at.to_i
    json.category wissle.category.title
  end
end
