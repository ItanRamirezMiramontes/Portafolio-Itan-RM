# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependencias primero (aprovecha cache de Docker)
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Copia el resto del código
COPY . .

# Build de producción
ARG VITE_SITE_URL
ENV VITE_SITE_URL=${VITE_SITE_URL:-https://itanramirez.dev}

RUN npm run build

# ---- Stage 2: Serve con Nginx ----
FROM nginx:1.25-alpine AS production

# Copia el build
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
