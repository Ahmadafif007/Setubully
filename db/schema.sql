DROP DATABASE IF EXISTS setubully_db;
CREATE DATABASE setubully_db;

CREATE TABLE milestones(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR,
description TEXT NOT NULL);

INSERT into milestones values(1,'Muhammad Adji','Kita harus menghindari cikal bakal bullying.'),(2,'Afif','Yups. Thats right man'),(3,'Fian','Saya letih dibully terus nih guys'),(4,'Fivy','Sabar Guys'),(5,'Tama','Sharing your story and helping others'),(6,'Anonimous','With this new life that you have created for yourself, through all the hardhips, you have made it this far and have show to not only your friends and family but most importantly yourself that having a goal and staying dedicated can make all the difference to changing ones life around.');

/*Automatic creating table by sequalize  */
CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, post_text VARCHAR NOT NULL, user_id INT references users(id));

/*Automatic creating table by sequalize  */
CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR NOT NULL, email VARCHAR NOT NULL UNIQUE, password VARCHAR(6) NOT NULL, about TEXT, first_name VARCHAR, last_name VARCHAR, nickname VARCHAR, isPrivate BOOLEAN);
