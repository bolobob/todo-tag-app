module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :labels, [Types::LabelType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
