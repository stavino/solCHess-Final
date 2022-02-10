class RankingSerializer < ActiveModel::Serializer
  attributes :id, :points
  has_one :user
end
