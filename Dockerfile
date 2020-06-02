FROM node:latest

WORKDIR /src

COPY . .

EXPOSE 3000

CMD ["node","main.js"] 
