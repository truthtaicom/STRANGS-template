FROM node:12-alpine

ENV PORT 3000
RUN apk update && apk add yarn && rm -rf /var/cache/apk/*

# Create and define the node_modules's cache directory.
RUN mkdir -p /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json  ./
COPY yarn.lock ./
RUN yarn --silent

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY entrypoint.sh ./
# Building app
# RUN yarn build
EXPOSE 3000

RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]

ENTRYPOINT ["sh", "/usr/src/app/entrypoint.sh"]

# For Dev mode: 
#     CMD "yarn" "dev"
# For Prod mode: 
#     CMD "yarn" "start"
# CMD "yarn" "dev"