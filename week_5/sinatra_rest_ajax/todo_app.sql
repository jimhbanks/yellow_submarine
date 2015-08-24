drop table items;
create table items (
  id serial4 primary key, 
  item varchar(255),
  done boolean
);

INSERT INTO items (item, done) VALUES ('Go to the Shops', true);
INSERT INTO items (item, done) VALUES ('Go on a run', false);


