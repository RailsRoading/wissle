# frozen_string_literal: true

json.array! @resources, :partial => 'api/comments/comment', :as => :comment
