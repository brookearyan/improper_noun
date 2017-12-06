Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # get '/haikus', to: 'haikus#index'
      # get '/haikus/:id', to: 'haikus#show'
      # get '/haikus', to: 'haikus#new'
      # post '/haikus', to: 'haikus#create'
      resources :haikus
    end
  end
end
