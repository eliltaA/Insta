class Comment < ApplicationRecord
    validates :comment_body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes, as: :likeable,
        dependent: :destroy

    belongs_to :post
end
