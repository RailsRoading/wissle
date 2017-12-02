# frozen_string_literal: true

json.array! @resources, :partial => 'tags/tag', :as => :tag
