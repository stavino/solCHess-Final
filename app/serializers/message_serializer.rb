class MessageSerializer < ActiveModel::Serializer
  attributes :content, :id
  has_one :room
  has_one :user
end
