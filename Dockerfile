# pull official base image
FROM node:15.6.0-alpine3.10 as appBuilder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json /app/


RUN npm install --silent --production

COPY ./ /app/

RUN npm run build



FROM nginx:1.19.6

# add app
COPY --from=appBuilder /app/build/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  