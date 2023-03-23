# neale-mvc-tech-blog

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build both the back-end and front-end of a Content Management Sytem (CMS) style blog web site, where developers can publish their blog posts 
and comment on othr developers' posts as well. Once built the application is to be deployed to Heroku.

The application will use Handlebars.js as the templating language, and utilise Sequelize, expression-session npm and range of other packages. 
Will have built-in security protocols, including a hash password

## Packages Used

|          Package               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Node.js                        |Executes JavaScript code outside a web browser.                                                                               |
| MySql                          |A relational databse management system based on structured query language (SQL).                                              |              
| Sequelize                      |A modern TypeScript and Node.js Object Relational Mapping (ORM) that offers solid transaction support.                        |
| Connect-Session-Sequelize      |A session store for connecting a session using sequelize.                                                                     |
| Express.js                     |A Node.js web application framework providing broad features to build web & mobile application.                               |
| Express.Handlebars             |A simple template language to generate HTML or other text formats, includes embedded Handlebar expressions.                   |
| Express-Session                |Stores the session data on the client in a cookie. Will expires & require logging in again if site left idle for set-time.    |
| dotenv                         |Used to store environment variables data used by the operating system and other programs (DB_Name, DB_User, B_PW).            |             
| Bcrypt                        |A password hashing function.                                                                                                  |
| Insomnia AAPI Design Platform  |A collaborative API client and Design Tool.                                                                                   |
| BootStrap                      |A CSS Framework used to simplify and improve the styling process when developing web applications. 


## MVC Tech Blog

The Tech Blog web application is an easy to use blog application for developers to share information, learn about new initiatives etc and discuss tech related topics.  It has been purposely designed to meet a number of non-functional requirements including functionality, inviting aesthetics and a secure environment where users are required to login using a username and a password that is hashed for extra security.

## Project Description
 
The main objective of this project was to build the back-end and front-end of an application from scratch. This included but was not limited to coding the following main file types and linking them:

- connection.js
- Multiple routes
- schema.sql
- Models
- Multiple Javascript files
- Seeds
- auth.js, helpers.js
- Eight handlebar files
- Server.js

The project also required loading a range of software packages and pushing work completed to Github by creating branches, with submitted work being approved before being loaded to Github.

## Usage

To access the MVC Tech Blog web application homepage at the command-line the following commands are entered:

- mysql -u root-p
- Enter password
- USE tech_blog_db
- quit or \n to leave 'sql'
- npm run seeds
- node server.js

Upon successfully entering these commands the sentence **"App listening on port 3001!"** is displayed.

At this point the user either navigates to insomnia or the web browser and enters "localhost:3001", then presses send or enter based on which application.

When the user visists the web MVC Tech Blog application they are taken directly to the homepage window that has a list of all blogs added, which appear in decending order (most recent first). The user then has the option to login (or signup). Once successfully logged in the application navigates to the dashboard window (page) where they able to create a post.  Once the post is created the user simply selects the relevant menu option to edit, comment on or even delete a post.

## Deployed Application and Screenshots

Link to Heroku: https://limitless-beach-81711.herokuapp.com/

### Screenshots

Home Page:

![image](https://user-images.githubusercontent.com/115671306/227119917-8bcff791-01a8-41d5-9fbd-7d866f368d9e.png)

Login Page:

![image](https://user-images.githubusercontent.com/115671306/227120074-f0da7615-7405-4b77-b736-23fb1d63dd86.png)

Dashboard Pages:

![image](https://user-images.githubusercontent.com/115671306/227120223-dd5d6965-506f-4c89-a4fd-a7e1b8158d1a.png)

![image](https://user-images.githubusercontent.com/115671306/227120653-c8bacb0b-cdde-453c-9270-1a3d05b486fa.png)


## License

MIT 