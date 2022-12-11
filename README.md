# Projek Capstone Dicoding
# Setubully
### Website Pencegahan & Penanganan Bullying di Sekolah 

* Tema : Solusi Pengelolaan Kehidupan yang Berkelanjutan
* Anggota Tim : 

1. F120Y0178 - Fivy Nur Safitri
2. F120X0169 - Ahmad Afif Wildan 
3. F110X0143 - Muhammad Adji Pratama
4. F350X0909 - M Ardan Dimyathi Alfian

### Fitur - Fitur
* Tips & Informasi : Pada bagian ini terdapat tips, informasi, dan motivasi yang terkait dengan bullying untuk pengguna ataupun korban bulying.   
* Pelaporan : Pada fitur ini diperuntukkan bagi korban yang ingin melaporkan tindakan bulying. Disini terdapat formulir yang harus diisi dengan lengkap.
* Forum Diskusi : Pada fitur ini berupa diskusi yang bisa dilakukan untuk berbagi informasi ataupun cerita oleh pengguna.

### Daftar Isi :
1. [Desain Website](https://www.figma.com/file/H0FbYno4qUhD31tvkWVuCl/UI-SETUBULLY?node-id=0%3A1&t=2Z4PPOzqlFVIzm4p-1)
2. [Project Brief]()
3. [Vidio Demo](https://drive.google.com/file/d/1c7SgorKAW9wYF8E_RQfZmgWtONaWYNZr/view)
4. [Vidio Presentasi Project](https://drive.google.com/file/d/1c7SgorKAW9wYF8E_RQfZmgWtONaWYNZr/view)
5. [LoginSignUp](https://github.com/Ahmadafif007/Setubully/tree/LoginSignup)
6. [Pelaporan](https://github.com/Ahmadafif007/Setubully/tree/Pelaporan)

### How to use Repository :
1. npm install
  To install all package needed in this depedency
2. Turn on your server mysql, and then adjust the dialect, user, and password of your mysql server. first adjust is in the file .env and then on the file config/connection.js 
3. on your mysql create 

DROP DATABASE IF EXISTS setubully_db;
CREATE DATABASE setubully_db;


CREATE TABLE milestones(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR,
description TEXT NOT NULL);

INSERT into milestones values(1,'Muhammad Adji','Kita harus menghindari cikal bakal bullying.'),(2,'Afif','Yups. Thats right man'),(3,'Fian','Saya letih dibully terus nih guys'),(4,'Fivy','Sabar Guys'),(5,'Tama','Sharing your story and helping others'),(6,'Anonimous','With this new life that you have created for yourself, through all the hardhips, you have made it this far and have show to not only your friends and family but most importantly yourself that having a goal and staying dedicated can make all the difference to changing ones life around.'); 

4. npm run start / npm start on your terminal repository
Website will be showen on localhost:8080 


## Summary

## Table of Contents

## Development

## Usage

### Landing page

### Discussion page

### Profile

## Credits

## License

## Challenges

## Technologies

## Npm Packages

- dotenv
- express
- mysql2
- sequelize
- nodemon
- bcrypt

## Features

Features included in this site is keeping a user logged in even after leaving the site and being able to view a dashboard which displays all posts from the current user logged in.

## Future Development

A definite path this site is headed is creating user profiles for a user and a page to render their profile with the ability to choose whether or not to keep a profile private.

## How to Contribute

Fork the Repo and make a pull request for code to be reviewed and considered for merge to main branch.

## Questions

## Link
