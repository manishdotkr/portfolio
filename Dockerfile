FROM ubuntu as build-step
copy . /app

from nginx
copy --from=build-step /app/project-portfolio_website /usr/share/nginx/html
