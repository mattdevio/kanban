#!/usr/bin/env bash
# https://serverfault.com/questions/577370/how-can-i-use-environment-variables-in-nginx-conf
envsubst < /etc/nginx/conf.d/nginx.template > /etc/nginx/conf.d/default.conf
nginx -g "daemon off"