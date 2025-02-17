# Stap 1: Gebruik een officiële Node.js image als basis
FROM node:18 AS builder

# Stap 2: Stel de werkdirectory in
WORKDIR /lesson02

# Stap 3: Kopieer package.json en installeer dependencies
COPY package.json package-lock.json ./
RUN npm install

# Stap 4: Kopieer de rest van de bestanden en build de app
COPY . .
RUN npm run build

# Stap 5: Gebruik een lichte Nginx-container voor hosting
FROM nginx:alpine AS runner
COPY --from=builder /lesson02/dist /usr/share/nginx/html

# Stap 6: Expose poort 80 voor toegang
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
