FROM node:14.10.1-stretch

COPY package.json /app/

WORKDIR /app

ENV NODEJS_DEBUG_PORT=9099

EXPOSE ${NODEJS_DEBUG_PORT}

RUN npm i \
  && npm install -g nodemon \
  && npm cache clean --force

EXPOSE 3000

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

COPY ./ /app/

ENTRYPOINT ["/entrypoint.sh"]
