class Api::UsersController < ApplicationController
    def index 
        render json: User.all
    end

    # def show 
    #     player = get_user
    #     if player
    #         render json: player, serializer: UserShowSerializer
    #     else render json: {error: "User with that ID does not exist"}, status: :not_found
    #     end
    # end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No one is logged in",
            status: :unauthorized
        end 
    end

    def create 
        new_user = User.create(user_params)
        if new_user.save
            session[:user_id] = new_user.id
            render json: new_user, status: :created
        else render json: {error: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    
    
    
    def get_user
        User.find_by_id(params[:id])
    end

    def destroy
        user_to_delete = get_user
        if user_to_delete
            user_to_delete.destroy
            render json: {}, status: :ok
        else render json: {error: "User with that ID doesn't exist"}, status: :not_found
        end
    end
private
    def user_params 
        params.permit(:username, :password)
    end
end
