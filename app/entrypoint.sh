#!/bin/sh

npm run lint && npm run test-coverage \
  && nodemon --inspect=0.0.0.0:$NODEJS_DEBUG_PORT --experimental-modules ./src/index.js
