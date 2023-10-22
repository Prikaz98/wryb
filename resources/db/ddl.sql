CREATE TABLE IF NOT EXISTS task (
    id varchar(255) PRIMARY KEY,
    title varchar(1000),
    "desc" text,
    isdone boolean
);
