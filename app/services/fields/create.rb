module Fields
  class Create
    attr_reader :subscriber_form

    RecordInvalid = Class.new(StandardError)

    def self.process(field_form)
      new(field_form).process
    end

    def initialize(field_form)
      @field_form = field_form
    end

    def process
      if field_form.valid?
        field = Field.new(
          field_form.object_attrs_form_fields(FieldForm::FIELD_ATTRIBUTES)
        )
        field.save!
        field
      else
        raise RecordInvalid.new(field_form.errors.full_messages)
      end
    end
  end
end
