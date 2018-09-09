module Api::V1
  class FieldsController < ApplicationController

    # GET /fields
    def index
      @fields = Field.all
      render json: @fields
    end


    # GET /fields/id
    def show
      @field = Field.find(params[:id])
      render json: @field
    end


    # POST /fields
    def create
      @field = Field.new(field_params)

      if @field.save
        render json: @field, status: :created
      else
        render json: @field.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /fields/id
    def update
      @field = Field.find(params[:id])
      if @field.update(field_params)
        render json: @field
      else
        render json: @field.errors, status: :unprocessable_entity
      end
    end

    def destroy

    end

    private

    def field_params
      params.require(:field).permit(:name)
    end
  end
end
