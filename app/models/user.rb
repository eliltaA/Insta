# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  name            :string
#  bio             :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    validates :username, :email, presence: true
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    before_validation :ensure_session_token
   
#   has_many :posts,
#     primary_key: :id,
#     foreign_key: :author_id,
#     class_name: :Post,
#     dependent: :destroy
    
#   has_one_attached :profile_photo, dependent: :destroy  
#   has_many :comments 
#   has_many :likes


#   has_many :followers
#   has_many :followees
#   has_many :likes

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.authenticate(password)
            user
        else
            nil
        end
    end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
     self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  private
  def generate_unique_token
    loop do
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
    end
end

end
