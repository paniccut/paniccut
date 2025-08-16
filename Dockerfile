# Use official PHP with Apache
FROM php:8.2-apache


# Install system dependencies + PHP extensions
RUN apt-get update && apt-get install -y \
    git unzip zip curl npm nodejs gnupg \
    libzip-dev libonig-dev openssl \
    && docker-php-ext-install pdo_mysql zip

RUN a2enmod rewrite ssl && a2dissite default-ssl

# Add SSL certs
COPY ./docker/certs/apache-selfsigned.crt /etc/apache2/ssl/apache-selfsigned.crt
COPY ./docker/certs/apache-selfsigned.key /etc/apache2/ssl/apache-selfsigned.key

# Enable default SSL site config
# Add your SSL site config
COPY ./docker/apache/my-ssl.conf /etc/apache2/sites-available/my-ssl.conf
RUN a2enmod ssl && a2ensite my-ssl

# Set working directory
WORKDIR /var/www/html

# Copy app source
COPY . .

# Copy Composer from official image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader
RUN npm install

# Install Node dependencies
# RUN rm -rf node_modules package-lock.json && npm install // \"php artisan serve --host=0.0.0.0\"

# Optional: expose Vite dev server port too, if used
EXPOSE 80 443 5173

# Start Apache
CMD ["apache2-foreground"]
