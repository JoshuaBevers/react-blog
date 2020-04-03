create DATABASE posts;

create table authors
(
    id serial primary key,
    name varchar,
    email varchar
);

create table posts
(
    id serial primary key,
    title varchar,
    content text,
    author_id integer references authors(id)
);