# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  caption    :text
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    
    has_one_attached :photo

    has_many :comments,
        dependent: :destroy

    has_many :likes, as: :likeable,
    dependent: :destroy

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
