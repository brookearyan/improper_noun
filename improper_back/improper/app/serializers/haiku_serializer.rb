class HaikuSerializer < ActiveModel::Serializer
  attributes :id, :alias, :noun_one, :noun_two, :noun_three, :noun_four, :noun_five
end
