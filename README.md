# Lookpin

## Create Project
```
rails new lookpin --webpack=vue
```

## setting

```
#index.html.erb
<%= javascript_pack_tag 'hello_vue' %>
```

```
# ./Procfile
web: bundle exec puma -p $PORT

# ./Procfile.dev
web: bundle exec rails s
# watcher: ./bin/webpack-watcher
hot: ./bin/webpack-dev-server

# ./bin/server

#!/bin/bash -i
bundle install
bundle exec foreman start -f Procfile.dev

# chmod 777 ./bin/server

# Gemfile
group :development do
  gem 'foreman'
end
```
