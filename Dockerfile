# Usamos Nginx ultra liviano
FROM nginx:alpine

# Eliminamos la config por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copiamos nuestra configuración
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos TODOS los archivos del frontend (HTML)
COPY . /usr/share/nginx/html

# Exponemos el puerto que usa Render
EXPOSE 80

# Nginx en primer plano (obligatorio)
CMD ["nginx", "-g", "daemon off;"]
