FROM node:16

COPY . .

RUN npm install

EXPOSE 8002

CMD ["npm", "start"]
