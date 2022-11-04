class UserController < Sinatra::Base

    # User Routes

    set :default_content_type, 'application/json'

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
end
