

FROM node:18-alpine

WORKDIR /usr/src/app

RUN echo '{ \
  "name": "docker-app", \
  "version": "1.0.0", \
  "description": "App Docker Grupo 5", \
  "main": "app.js", \
  "scripts": { \
    "start": "node app.js", \
    "dev": "nodemon app.js" \
  }, \
  "dependencies": { \
    "express": "4.18.2" \
  }, \
  "devDependencies": { \
    "nodemon": "3.1.10" \
  } \
}' > package.json

RUN npm install express@4.18.2 --save && \
    npm install nodemon@3.1.10 --save-dev && \
    npm cache clean --force

COPY app.js .

EXPOSE 3000

USER node

CMD ["node", "app.js"]
