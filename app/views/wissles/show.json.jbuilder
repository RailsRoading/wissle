if @resource.errors.any?
  json.errors @resource.errors.full_messages
else
  json.data do
    json.id @resource.id
    json.longitude @resource.longitude
    json.latitude @resource.latitude
    json.text @resource.text if @resource.text
  end
end
