class ReviewController < Sinatra::Base
    
    
    # Review Routes

    set :default_content_type, 'application/json'

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

end
