FROM ubuntu as build-step
copy . /app

from nginx
copy --from=build-step /app/index.html /usr/share/nginx/html

copy --from=build-step /app/img /usr/share/nginx/html/img
copy --from=build-step /app/about.html /usr/share/nginx/html
copy --from=build-step /app/index.html /usr/share/nginx/html
