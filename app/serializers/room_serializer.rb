class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :messages
end
