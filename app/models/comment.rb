class Comment < ApplicationRecord
    validates :comment_body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User


    belongs_to :post
end
