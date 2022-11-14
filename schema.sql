DROP DATABASE IF EXISTS "seedbank";

CREATE DATABASE "seed-bank";

DROP TABLE IF EXISTS plant_dates;
CREATE TABLE plant_dates
(
  plant_id serial PRIMARY KEY,
  plant_name text,
  latin_name text,
  transplant_start text,
  transplant_end text,
  direct_sowing_start text,
  direct_sowing_end text,
  germination_time integer,
  time_to_harvest integer
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

copy plant_dates (plant_name, latin_name, transplant_start, transplant_end, direct_sowing_start, direct_sowing_end,
 germination_time, time_to_harvest) FROM
 '/Users/angelacarrasco/Downloads/plant_dates.csv' DELIMITER ',' CSV HEADER QUOTE '"' ESCAPE '''';