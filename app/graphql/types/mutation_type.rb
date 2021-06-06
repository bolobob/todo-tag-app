module Types
  class MutationType < Types::BaseObject
    field :create_label, mutation: Mutations::CreateLabel
    field :delete_task, mutation: Mutations::DeleteTask
    field :update_task, mutation: Mutations::UpdateTask
    field :create_task, mutation: Mutations::CreateTask
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
