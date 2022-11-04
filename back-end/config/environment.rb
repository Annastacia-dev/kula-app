ENV['RACK_ENV'] ||= 'development'

require 'bundler/setup'

Bundler.require(:default, ENV['RACK_ENV'])

require_all 'app'


Dir[File.join(File.dirname(__FILE__), "../app/models", "*.rb")].each {|f| require f}
Dir[File.join(File.dirname(__FILE__), "../app/controllers", "*.rb")].each {|f| require f}
