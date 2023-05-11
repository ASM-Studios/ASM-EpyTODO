CREATE DATABASE IF NOT EXISTS epytodo;

use epytodo;

CREATE TABLE IF NOT EXISTS user
(
    id INT unsigned NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
) AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS todo
(
    id INT unsigned NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description text NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    due_time DATETIME NOT NULL,
    status ENUM('not started', 'todo', 'in progress', 'done') NOT NULL DEFAULT 'not started',
    user_id INT unsigned NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
) AUTO_INCREMENT = 1;

DELETE FROM user;
DELETE FROM todo;

TRUNCATE TABLE user;
ALTER TABLE user AUTO_INCREMENT = 1;
TRUNCATE TABLE todo;
ALTER TABLE todo AUTO_INCREMENT = 1;
