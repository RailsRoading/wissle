if @resource.errors.any?
  json.errors @resource.errors.full_messages
else
  json.array! @resource.wissles, :partial => 'wissles/wissle', :as => :wissle
end
