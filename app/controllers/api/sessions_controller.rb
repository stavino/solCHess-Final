class Api::SessionsController < ApplicationController
    def login
        logged_in_user = User.find_by_username(params[:username])
        if logged_in_user&.authenticate(params[:password])
          session[:user_id] = logged_in_user.id
          render json: logged_in_user, status: :ok
        else render json: {error: "Invalid Username/password"}, status: :not_found
        end
      end
    
      def logout
        session.delete :user_id
      end
end
