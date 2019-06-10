USE gwi3sd4ux2qctsnz;

CREATE TABLE burgers (

    id integer auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean DEFAULT false,
    primary key(id)

);