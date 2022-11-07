require_relative './reservation_controller'
require_relative './restaurant_controller'
require_relative './review_controller'
require_relative './user_controller'

class ApplicationController < Sinatra::Base 

    before do
        response.headers['Access-Control-Allow-Origin'] = '*'
    end

    get '/' do
        "Welcome to the Restaurant Review App!"
    end
    
    use RestaurantController
    use ReviewController
    use ReservationController
    use UserController

end