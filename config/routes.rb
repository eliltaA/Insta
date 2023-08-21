Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :posts, only: [:create, :show, :destroy, :index, :update]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
  end
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', 
        to: 'static_pages#frontend', 
        constraints: lambda { |req| !req.xhr? && req.format.html? } 

    root to: 'static_pages#frontend'
end
