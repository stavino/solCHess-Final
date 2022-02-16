class Room < ApplicationRecord
    has_many :messages
    has_many :users, through: :messages
    
    scope :public_rooms, -> {where(is_private: false)}
end
