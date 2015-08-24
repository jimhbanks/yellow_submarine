CREATE TABLE planet (
  id serial4 primary key,
  name varchar(255) not null,
  year_length int2,
  day_length int2 
);

CREATE TABLE satillite (
  id serial4 primary key,
  name varchar(255) not null,
  year_length int2,
  day_length int2, 
  planet_id int2
); 

CREATE TABLE alien_species (
  id serial4 primary key,
  name varchar(255) not null,
  average_age int2,
  capable_of_love boolean,     
  planet_id int2
);