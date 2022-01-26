class Match < ApplicationRecord
    belongs_to :player1, class_name: "User", foreign_key: "player1_id"
    belongs_to :player2, class_name: "User", foreign_key: "player2_id"
  
    validates :player1_id, presence: true
    validates :player2_id, presence: true
  end
  