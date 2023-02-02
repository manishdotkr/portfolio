FROM ubuntu as build-step
copy . /app

from nginx
copy --from=build-step /app/index.html /usr/share/nginx/html
