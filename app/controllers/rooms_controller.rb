class RoomsController < ApplicationController
    def index 
        render json: Room.all
    end

    def show
        current_chat = Room.find_by_id(params[:id])
        render json: current_chat
    end
end
