#!/bin/bash

# node
rm -rf node/public/ \
&& cp -r public/ node/

# node-express
rm -rf node-express/public/ \
&& cp -r public/ node-express/

# node-static-auth
rm -rf node-static-auth/public/ \
&& cp -r public/ node-static-auth/
