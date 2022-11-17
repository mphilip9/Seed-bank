FROM library/postgres:latest
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB reviews_db
COPY schema.sql /
COPY characteristic_reviews.csv /
COPY characteristics.csv /
COPY reviews_photos.csv /
COPY reviews.csv /
EXPOSE 5432