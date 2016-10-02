# If you do not have OpenSSL installed, update
# the following line to use "http://" instead

# If you get an openssl error when installing bundle
# try before "bundle install", "bundle config build.eventmachine --with-cppflags=-I$(brew --prefix openssl)/include"		

source 'https://rubygems.org'

gem "middleman", "~>3.3.12"
gem 'susy', "~>2.2.1", :require => false
gem 'breakpoint'

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw, :jruby]