# frozen_string_literal: true

if @resource.errors.any?
  json.errors @resource.errors.full_messages
else
  json.data do
    json.id @resource.id
    json.username @resource.username
    json.age @resource.age
    json.uuid @resource.uuid if @show_uuid
  end
end
