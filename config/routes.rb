Rails.application.routes.draw do
  resources :messages
  resources :rooms
  resources :rankings
  get 'sessions/login'
  get 'sessions/logout'
  resources :matches
  resources :users
 
  get 'me', to: "users#show"
  delete '/logout', to: "sessions#logout"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#login"
  
end
