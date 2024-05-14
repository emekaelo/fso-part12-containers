# If I wanted to make test-stage a separate stage
#FROM node:20 as test-stage
#
#WORKDIR /usr/src/app
#
#COPY . .
#
#RUN npm ci
#
#RUN npm run test


FROM node:20 as build-stage

WORKDIR /usr/src/app

COPY . .
# If I wanted to make test-stage a separate stage
# COPY --from=test-stage . .
# Would probably not need to run npm ci or test. Straight to run build

RUN npm ci

RUN npm run test # Running test in the build process

ENV REACT_APP_BACKEND_URL="http://localhost:3000"

RUN npm run build

#RUN npm install -g serve
#CMD ["serve", "dist"]

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.25-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html