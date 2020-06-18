FROM node:12-alpine

ENV PORT 3000
RUN apk update && apk add yarn && rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json  ./
COPY yarn.lock ./
RUN yarn --silent

COPY ./ ./

# Building app
RUN yarn build
EXPOSE 3000

# For Dev mode: 
#     CMD "yarn" "dev"
# For Prod mode: 
#     CMD "yarn" "start-prod"
CMD "yarn" "start-prod"