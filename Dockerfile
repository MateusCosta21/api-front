FROM node:20.11.1
RUN npm install -g @angular/cli
WORKDIR /
RUN mkdir angular-app
WORKDIR /angular-app
COPY . .
CMD npm i && ng serve --host 0.0.0.0 --port 4200
EXPOSE 4200
