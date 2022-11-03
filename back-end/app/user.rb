class User < ActiveRecord::Base 
    has_many :reviews
    has_many :reservations
    has_many :restaurants, through: :reservations
end