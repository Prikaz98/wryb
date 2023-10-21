create table if not exists task(
id varchar(255) primary key ,
title varchar(1000),
"desc" text,
isdone boolean
);