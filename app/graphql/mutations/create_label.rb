module Mutations
  class CreateLabel < BaseMutation
    # TODO: define return fields
    field :label, Types::LabelType, null: true

    # TODO: define arguments
    argument :name, String, required: true

    # TODO: define resolve method
    def resolve(name:)
      label = Label.create(name: name)
      { label: label }
    end
  end
end
