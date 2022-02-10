class User < ApplicationRecord
    has_secure_password
    
    has_many :player1_matches, class_name: "Match", foreign_key: "player1_id", dependent: :destroy
    has_many :player2_matches, class_name: "Match", foreign_key: "player2_id", dependent: :destroy
    has_one :ranking
    validates :username, presence: true, uniqueness: true
end
