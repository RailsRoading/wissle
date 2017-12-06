# frozen_string_literal: true

if wissle.errors.any?
  json.errors wissle.errors.full_messages
else
  json.data do
    json.id wissle.id
    json.longitude wissle.longitude
    json.latitude wissle.latitude
    json.text wissle.text
  end
end
