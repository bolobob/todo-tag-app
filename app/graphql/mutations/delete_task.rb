module Mutations
  class DeleteTask < BaseMutation
    # TODO: define return fields
    field :task, Types::TaskType, null: true

    # TODO: define arguments
    argument :id, ID, required: true

    # TODO: define resolve method
    def resolve(id:)
      task = Task.find(id)
      task.destroy
      { task: task }
    end
  end
end
