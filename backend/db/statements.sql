CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
)

INSERT INTO users (name,age)
VALUES
    ('Tobi', 22)
    ('Niklas', 24)
    
DROP TABLE users

DELETE FROM users WHERE name = 'Tobi'

SELECT name FROM users WHERE id = 2

DROP TABLE users