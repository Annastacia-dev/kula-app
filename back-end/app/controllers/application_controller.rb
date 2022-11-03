class ApplicationController < Sinatra::Base 
    set :default_content_type, 'application/json'

    get '/restaurants' do
        restaurants = Restaurant.all
        restaurants.to_json
    end
end