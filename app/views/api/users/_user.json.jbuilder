# frozen_string_literal: true

if user.errors.any?
  json.errors user.errors.full_messages
else
  json.data do
    json.id user.id
    json.username user.username
    json.age user.age
    json.uuid user.uuid if @show_uuid
  end
end
