class MessagesController < ApplicationController
    def index 
        render json: Message.all
    end

    def create
        new_message = Message.create(message_params)
        if new_message
            render json: new_message, status: :ok
        else render json: {error: new_message.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def message_params
        params.permit(:user_id, :room_id, :content)
    end
end
