DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

    id integer auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean not null,
    primary key(id)

);