class RestaurantController < Sinatra::Base 

    set :default_content_type, 'application/json'

     # Restaurant Routes

     get '/restaurants' do
        restaurants = Restaurant.all
        restaurants.to_json(
            :include => {
                :reviews => {:only => [:id, :content, :rating]}
            },
        )
    end

    get '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.to_json
            
    end

    get '/top_rated' do
        restaurants = Restaurant.top_rated
        restaurants.to_json
        
    end

    post '/restaurants' do
        restaurant = Restaurant.create(
            name: params[:name],
            location: params[:location],
            cuisine: params[:cuisine],
            price: params[:price],
            description: params[:description]
        )
        restaurant.to_json
    end

    put '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.update(
            name: params[:name],
            location: params[:location],
            cuisine: params[:cuisine],
            price: params[:price],
            description: params[:description]
        )
        restaurant.to_json
    end

    delete '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        restaurant.to_json
    end


end