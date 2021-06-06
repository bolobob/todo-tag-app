module Mutations
  class UpdateTask < BaseMutation
    # TODO: define return fields
    field :task, Types::TaskType, null: true

    # TODO: define arguments
    argument :id, ID, required: true
    argument :title, String, required: false
    argument :labelIds, [ID], required: false

    # TODO: define resolve method
    def resolve(**args)
      task = Task.find(args[:id])
      task.title = args[:title] unless args[:title].nil?
      task.labels = Label.find(args[:labelIds]) unless args[:labelIds].nil?
      task.save
      { task: task }
    end
  end
end
