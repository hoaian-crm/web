FROM node:16 as builder

WORKDIR /frontend

COPY package*.json .
RUN npm install # Install nodejs dependencies

COPY . .
RUN npm run build # Build source

FROM nginx:1.25.2
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/


EXPOSE 80