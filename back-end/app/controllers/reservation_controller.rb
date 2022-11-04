class ReservationController < Sinatra::Base 

    set :default_content_type, 'application/json'

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