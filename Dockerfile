FROM node:12-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk add yarn && rm -rf /var/cache/apk/*

# Installing dependencies
COPY package*.json yarn.lock /usr/src/app/
RUN yarn --silent

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 3000

# For Dev mode: 
#     CMD "yarn" "dev"
# For Prod mode: 
#     CMD "yarn" "start"
CMD "yarn" "dev"