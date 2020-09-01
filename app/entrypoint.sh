#!/bin/sh

npm run lint \
  && nodemon --inspect=0.0.0.0:$NODEJS_DEBUG_PORT --experimental-modules ./src/index.js
