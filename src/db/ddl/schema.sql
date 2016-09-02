DROP DATABASE IF EXISTS contacts;
CREATE DATABASE contacts;
\c contacts
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
  id serial primary key,
  first_name varchar(25) NOT NULL,
  last_name varchar(25) NOT NULL,
  date_of_birth varchar(25),
  eye_color varchar(25),
  telephone_number varchar(40)
);
