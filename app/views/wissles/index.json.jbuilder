# frozen_string_literal: true

json.array! @resources, :partial => 'wissles/wissle', :as => :wissle
