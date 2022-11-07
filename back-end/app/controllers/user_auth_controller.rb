# class UserAuthController < Sinatra::Base

#     register Sinatra::ActiveRecordExtension

#     configure do
#        enable :sessions
#     end

#     get '/signup' do 
#         "Signup"
#     end

#     post '/signup' do
#         if User.find_by(email: params[:email])
#             {message: "Email already exists"}.to_json
#         else
#             @user = User.create(
#                 name: params[:name],
#                 email: params[:email],
#                 password_digest: params[:password_digest]
#             )
#             @user.to_json
#         end
#         session[:user_id] = @user.id
#     end


# end