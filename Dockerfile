FROM library/postgres:latest
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB reviews_db
COPY schema.sql /
COPY plant_dates.csv /
EXPOSE 5432