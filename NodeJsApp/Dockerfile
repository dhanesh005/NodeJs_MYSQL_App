FROM node:10
WORKDIR /opt/nodejsapp/
COPY package*.json /opt/nodejsapp/
RUN npm install
COPY . .
EXPOSE 3030
CMD ["npm", "start"]