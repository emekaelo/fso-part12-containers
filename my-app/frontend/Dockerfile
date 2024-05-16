FROM node:20 as build-stage

# FROM mcr.microsoft.com/playwright:v1.44.0-jammy # Todo: integrate playwright tests

WORKDIR /usr/src/app

COPY . .

RUN npm ci

#ENV REACT_APP_BACKEND_URL="http://localhost:8081/api"

RUN npm run build

#RUN npm install -g serve
#CMD ["serve", "dist"]

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.25-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html