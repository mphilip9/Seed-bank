DROP DATABASE IF EXISTS "seedbank";

CREATE DATABASE "seedbank";

DROP TABLE IF EXISTS plant_dates;
CREATE TABLE plant_dates
(
  plant_id serial PRIMARY KEY,
  plant_name text,
  first_planting_start date,
  first_planting_end date,
  second_planting_start date,
  second_planting_end date,
  annual_perennial text,
  time_to_harvest integer,
  zone_start integer,
  zone_end integer
);

DROP TABLE IF EXISTS plant_detail;
CREATE TABLE plant_detail
(
  plant_name text,
  soil_type text,
  watering text,
  sun text,
  spacing text,
  special_instructions text,
  fertilizer text
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id serial PRIMARY KEY,
  sub text UNIQUE,
  email text,
  zone text,
  created_at TIMESTAMPTZ DEFAULT Now()
);

copy plant_dates (plant_name, first_planting_start, first_planting_end, second_planting_start, second_planting_end,
 Annual_perennial, time_to_harvest, zone_start, zone_end) FROM
 '/Users/angelacarrasco/Downloads/plant_dates.csv' DELIMITER ',' CSV HEADER QUOTE '"' ESCAPE '''';

 CREATE UNIQUE INDEX idx_user_sub ON users (sub);