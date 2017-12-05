# frozen_string_literal: true

if @resource.errors.any?
  json.errors @resource.errors.full_messages
else
  json.data do
    json.id @resource.id
    json.title @resource.title if @resource.title
  end
end
