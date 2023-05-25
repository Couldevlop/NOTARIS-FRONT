FROM node:18-alpine

RUN mkdir -p ~/notaris-front

WORKDIR ~/notaris-front

COPY package.json ./

RUN npm install

COPY . .
   
EXPOSE 4200

CMD ["npm", "start"]