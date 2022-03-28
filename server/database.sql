CREATE DATABASE feedback;

CREATE TABLE mess(
    mess_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    text VARCHAR(255)
)