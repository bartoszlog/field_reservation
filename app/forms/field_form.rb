class FieldForm < FormObject
  FIELD_ATTRIBUTES = [
    :name
  ]

  attr_accessor(*FIELD_ATTRIBUTES)

  validates :name, presence: true
end
