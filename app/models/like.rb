class Like < ApplicationRecord
    validates :likeable_type, presence: :true
    validates :likeable_id, presence: :true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :likeable, polymorphic: true
end
