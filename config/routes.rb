Rails.application.routes.draw do
  get 'session/login'
  get 'session/logout'
  resources :matches
  resources :users
 
  get 'me', to: "users#show"
  delete '/logout', to: "sessions#logout"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
