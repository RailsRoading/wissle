# frozen_string_literal: true

json.array! @resources, :partial => 'api/tags/tag', :as => :tag
