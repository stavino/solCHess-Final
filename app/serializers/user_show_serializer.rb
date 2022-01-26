class UserShowSerializer < ActiveModel::Serializer
    attributes :id, :username, :player1_matches, :player2_matches
  end
  