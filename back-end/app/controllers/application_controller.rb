require_relative './reservation_controller'
require_relative './restaurant_controller'
require_relative './review_controller'
require_relative './user_controller'

class ApplicationController < Sinatra::Base 
    

    get '/' do
        "<h2>Welcome to the Restaurant Review API<h2>"
    end

  
    use UserController
    use ReservationController
    use ReviewController
    use RestaurantController


end