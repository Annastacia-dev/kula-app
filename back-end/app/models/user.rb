class User < ActiveRecord::Base 
    has_many :reviews
    has_many :reservations
    has_many :restaurants, through: :reservations

    validates_presence_of :name, :email, :password
end