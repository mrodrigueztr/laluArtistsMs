FROM node:latest

RUN mkdir /my_app

COPY /lalu_artists_ms /my_app

WORKDIR /my_app
RUN npm install 
EXPOSE 3000

CMD ["npm", "start"]