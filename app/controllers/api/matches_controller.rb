class Api::MatchesController < ApplicationController
    def index 
        render json: Match.all
    end

    def show
        match = find_match
        if match 
            render json: match
        else render json: {error: "Match with that ID doesn't exist"}
        end
    end

    def create
        match = Match.create(match_params)
        if match.save
        render json: match
        else render json: {errors: match.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        match = find_match
        if match
            match.destroy
            render json: {}, status: :ok 
        else render json: {error: "Match with that ID doesn't exist"}, status: :not_found
        end
    end
private

    

     
    def match_params
        params.permit(:player1_id, :player2_id)
    end

    def find_match
        Match.find_by_id(params[:id])
    end
end
