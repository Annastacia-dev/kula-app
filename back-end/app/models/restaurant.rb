class Restaurant < ActiveRecord::Base 
    has_many :reviews
    has_many :reservations
    has_many :users, through: :reservations
    
    def self.top_rated 
        self.all do |restaurant| 
            restaurant.reviews.average(:rating)
        end
    end
end