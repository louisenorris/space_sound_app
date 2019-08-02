Rails.application.routes.draw do
  resources :sounds
  resources :scores
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # add restful routes
  # get '/sounds' => 'sounds#index'
  # get '/sounds/:id' => 'sounds#show'
end
