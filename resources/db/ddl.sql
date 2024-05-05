CREATE TABLE IF NOT EXISTS task (
    id varchar(255) PRIMARY KEY,
    title varchar(1000),
    "desc" text,
    isdone boolean,
    createtime timestamp,
    expiredtime timestamp,
    category varchar(255) default 'inbox'
);

CREATE TABLE IF NOT EXISTS category (
    id varchar(255) primary key,
    name VARCHAR(255),
    createtime timestamp
);

INSERT INTO category(id, name, createtime)
SELECT '2c279911-80f3-4446-9fb6-d188ba34f195','inbox', datetime()
WHERE not exists (select * from category where name = 'inbox');
