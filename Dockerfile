FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npx prisma generate

#RUN npx prisma migrate deploy

EXPOSE 3001

CMD ["npm", "run", "dev"]