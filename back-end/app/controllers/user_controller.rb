class UserController < Sinatra::Base 
    set :default_content_type, 'application/json'
    
    # User Routes

    get '/users' do
        users = User.all
        users.to_json
    end

    get '/users/:id' do
        user = User.find(params[:id])
        user.to_json
    end

    post '/users' do
        if User.find_by(email: params[:email])
            {message: "Email already exists"}.to_json
        else
            user = User.create(
                name: params[:name],
                email: params[:email],
                password_digest: params[:password_digest]
            )
            user.to_json
        end
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