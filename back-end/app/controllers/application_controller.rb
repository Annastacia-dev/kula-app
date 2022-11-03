class ApplicationController < Sinatra::Base 
   
    # Index
    get '/' do
        " Welcome to the Restaurant Review AP1
        Here are the available endpoints:
        Users: /users
            GET /users
            GET /users/:id
            POST /users
            PUT /users/:id
            DELETE /users/:id
            
            Restaurants /restaurants
            
                GET /restaurants
                GET /restaurants/:id
                POST /restaurants
                PUT /restaurants/:id
                DELETE /restaurants/:id
                
                Reviews /reviews
                
                    GET /reviews
                    GET /reviews/:id
                    POST /reviews
                    PUT /reviews/:id
                    DELETE /reviews/:id
                    
                    Reservations /reservations
                    
                        GET /reservations
                        GET /reservations/:id
                        POST /reservations
                        PUT /reservations/:id
                        DELETE /reservations/:id
                        "

    end

    set :default_content_type, 'application/json'

    # Restaurant Routes

    get '/restaurants' do
        restaurants = Restaurant.all
        restaurants.to_json
    end

    get '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.to_json(include: {reviews: {only: [:content, :rating, :created_at]}})
    end

    post '/restaurants' do
        restaurant = Restaurant.create(
            name: params[:name],
            location: params[:location],
            cuisine: params[:cuisine],
            image_url: params[:image_url]
        )
        restaurant.to_json
    end

    put '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.update(
            name: params[:name],
            location: params[:location],
            cuisine: params[:cuisine],
            image_url: params[:image_url]
        )
        restaurant.to_json
    end

    delete '/restaurants/:id' do
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        restaurant.to_json
    end

    # User Routes

    get '/users' do
        users = User.all
        users.to_json
    end

    get '/users/:id' do
        user = User.find(params[:id])
        user.to_json
    end

    post '/users' do
        user = User.create(
            name: params[:name],
            email: params[:email],
            password_digest: params[:password_digest]
        )
        user.to_json
    end

    put '/users/:id' do
        user = User.find(params[:id])
        user.update(
            name: params[:name],
            email: params[:email],
            password_digest: params[:password_digest]
        )
        user.to_json
    end

    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
        user.to_json
    end

    # Review Routes

    get '/reviews' do
        reviews = Review.all
        reviews.to_json
    end

    get '/reviews/:id' do
        review = Review.find(params[:id])
        review.to_json
    end

    post '/reviews' do
        review = Review.create(
            user_id: params[:user_id],
            restaurant_id: params[:restaurant_id],
            content: params[:content],
            rating: params[:rating]
        )
        review.to_json
    end

    put '/reviews/:id' do
        review = Review.find(params[:id])
        review.update(
            user_id: params[:user_id],
            restaurant_id: params[:restaurant_id],
            content: params[:content],
            rating: params[:rating]
        )
        review.to_json
    end

    delete '/reviews/:id' do
        review = Review.find(params[:id])
        review.destroy
        review.to_json
    end

    # Reservation Routes

    get '/reservations' do
        reservations = Reservation.all
        reservations.to_json
    end

    get '/reservations/:id' do
        reservation = Reservation.find(params[:id])
        reservation.to_json
    end

    post '/reservations' do
        reservation = Reservation.create(
            user_id: params[:user_id],
            restaurant_id: params[:restaurant_id],
            date: params[:date],
            time: params[:time],
            people: params[:people]
        )
        reservation.to_json
    end

    put '/reservations/:id' do
        reservation = Reservation.find(params[:id])
        reservation.update(
            user_id: params[:user_id],
            restaurant_id: params[:restaurant_id],
            date: params[:date],
            time: params[:time],
            people: params[:people]
        )
        reservation.to_json
    end

    delete '/reservations/:id' do
        reservation = Reservation.find(params[:id])
        reservation.destroy
        reservation.to_json
    end


end