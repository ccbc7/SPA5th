FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y postgresql-client

WORKDIR /app

COPY Gemfile* ./

RUN bundle install

COPY . .

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0", "-p", "3000"]
