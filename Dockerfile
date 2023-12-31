# Stage 1 - The Build Process
FROM node:16.13 as alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . ./
# RUN npm install
RUN npm ci
# RUN NODE_OPTIONS=--max_old_space_size=4096
RUN npm install --max-old-space-size=4096
RUN npm run build


# Stage 2 - The Production Environment
FROM nginx:1.12-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=alpine /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]