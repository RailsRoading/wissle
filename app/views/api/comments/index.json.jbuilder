# frozen_string_literal: true

json.array! @resources, :partial => 'comments/comment', :as => :comment
