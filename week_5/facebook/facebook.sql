DROP TABLE people;

CREATE TABLE people (
  id bigserial PRIMARY KEY,
  first varchar(30) NOT NULL,
  last varchar(50) NOT NULL,
  dob date CHECK (dob < '1/16/2000'),
  relationship varchar(50),
  friends int2 default 0,
  city varchar(20)
);

INSERT INTO people (first, last) VALUES ('mike', 'myers');
INSERT INTO people (first, last) VALUES ('austin', 'powers');
INSERT INTO people (first, last) VALUES ('bruce', 'willis');
INSERT INTO people (first, last, dob, relationship) VALUES ('jerry', 'springer', '1/1/1999', 'cant love anyone');
INSERT INTO people (first, last, dob, relationship) VALUES ('jimi', 'hendrix', '2/7/1950', 'loves his guitar');
INSERT INTO people (first, last, dob, relationship) VALUES ('jimmy', 'saville', '2/7/1910',  'weird with everyone');
