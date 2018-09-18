class FormObject
  include ActiveModel::Model

  def object_attrs_from_fields(object_fields)
    attrs = {}
    object_fields.each do |f|
      attrs[f] = instance_variable_get("@#{f}")
    end
    attrs
  end
end
