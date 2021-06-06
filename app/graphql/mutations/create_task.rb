module Mutations
  class CreateTask < BaseMutation
    # TODO: define return fields
    field :task, Types::TaskType, null: true

    # TODO: define arguments
    argument :title, String, required: true

    # TODO: define resolve method
    def resolve(title:)
      task = Task.create(title: title)
      { task: task }
    end
  end
end
