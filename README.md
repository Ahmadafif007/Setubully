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
* Tips & Informasi : 
* Pelaporan :
* Forum Diskusi :

### Daftar Isi :
1. [Desain Website](https://www.figma.com/file/H0FbYno4qUhD31tvkWVuCl/UI-SETUBULLY?node-id=0%3A1&t=2Z4PPOzqlFVIzm4p-1)
2. [Project Brief]()
3. [Vidio Demo]()
4. [Vidio Presentasi Project]()
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

