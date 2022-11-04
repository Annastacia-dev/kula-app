class Restaurant < ActiveRecord::Base 
    has_many :reviews
    has_many :reservations
    has_many :users, through: :reservations
end