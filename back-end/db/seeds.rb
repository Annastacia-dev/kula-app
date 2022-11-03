puts "Seeding data..."

# Create a user
10.times do
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        password_digest:Faker::Internet.password
    )
    end

#Create a restaurant
20.times do
    Restaurant.create(
        name: Faker::Restaurant.name,
        location: Faker::Address.city,
        cuisine: Faker::Restaurant.type,
        image_url: Faker::LoremFlickr.image
    )
    end

# Create a review
100.times do
    Review.create(
        user_id: User.all.sample.id,
        restaurant_id: Restaurant.all.sample.id,
        content: Faker::Restaurant.review,
        rating: rand(1..5)
    )
    end

# Create a reservation

30.times do
    Reservation.create(
        user_id: User.all.sample.id,
        restaurant_id: Restaurant.all.sample.id,
        date: Faker::Date.between(from: '2021-09-23', to: '2021-09-30'),
        time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
        people: rand(1..10)
    )
    end


puts "Done seeding!"