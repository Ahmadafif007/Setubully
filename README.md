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

[<img align="left" width="26px" alt="javascript" src="https://user-images.githubusercontent.com/82244776/132110201-fd810d53-561a-490f-a690-1735d4479281.png">][javascript]
[<img align="left" width="26px" alt="CSS" src="https://user-images.githubusercontent.com/82244776/132110242-a351f140-471c-4447-a513-91c2b8a166d7.png">][CSS]
[<img align="left" width="26px" alt="html" src="https://user-images.githubusercontent.com/82244776/132110258-65db95d8-f35b-4a2d-a091-8051a6b6f4f2.png">][html]
[<img align="left" width="26px" alt="nodejs" src="https://user-images.githubusercontent.com/82244776/134751947-5908a635-9d69-4dc7-8c4c-aeb9ea0fce66.png">][node]
[<img align="left" width="26px" alt="mysql" src="https://user-images.githubusercontent.com/82244776/132110331-da9891ba-5eef-44c3-87db-869b91f34702.png">][mysql]
[<img align="left" width="26px" alt="heroku" src="https://user-images.githubusercontent.com/82244776/132110346-720c197f-d193-4c6f-b84d-e9dc0420bba9.png">][heroku]
[<img align="left" width="26px" alt="bootstrap" src="https://user-images.githubusercontent.com/82244776/134751737-53bbac67-b5a8-486d-a009-ca59d3e26e6b.png">][bootstrap]
[<img align="left" width="26px" alt="github" src="https://user-images.githubusercontent.com/82244776/132110367-f5e3b9f5-b3cb-49c1-be7c-aded0df1b8c1.png">][github]<br><br>


[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[node]: https://nodejs.org/en/docs/
[mysql]: https://dev.mysql.com/doc/
[bootstrap]: https://getbootstrap.com/

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
