require_relative './config/environment'

use Rack::Cors do
    allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :options]
        end
    end

use Rack::JSONBodyParser


run ApplicationController