# frozen_string_literal: true

if tag.errors.any?
  json.errors tag.errors.full_messages
else
  json.data do
    json.id tag.id
    json.title tag.title
  end
end
