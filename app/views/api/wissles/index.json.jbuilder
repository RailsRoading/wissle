# frozen_string_literal: true

json.array! @resources, :partial => 'api/wissles/wissle', :as => :wissle
