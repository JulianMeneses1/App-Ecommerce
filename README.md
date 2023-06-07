# Ecommerce Application
***
## 1. :notebook_with_decorative_cover: General Info
This project is a dynamic website that simulates an ecommerce of informatic products. It has different categories and a cart, where you can load yor purchases. Besides it has a login with JWT, you can sign in as a user, to confirm and simulate a payment of the products in your cart, or as an admin, with the privilege to edit the products loaded in the store. 
I created this project as a way to practice what I am learning, using Spring Boot for the back and React for the front. 

Status: ACTIVE :heavy_check_mark:

## 2. :gear: Technologies
***
### Back
Here are the technologies and dependencies used in the back of this project:
#### Technologies
* [Java SE Development Kit](https://www.java.com/es/): Version 17.0.6
* [Spring Boot](https://spring.io/projects/spring-boot): Version 3.1.0
* [MySQL](https://www.mysql.com/): Version 8.0.33
#### Dependencies
* Spring Data JPA
* Spring Web
* Spring Boot DevTools
* Spring Security
* Lombok
* Validation
* JsonWebToken
* MySQL Driver
### Front
Here are the technologies and libraries used in the front of this project:
#### Technologies
* [React](https://es.react.dev/): Version 18.0.37
* [NodeJS](https://nodejs.org/es): Version 18.16.0
* [npm](https://www.npmjs.com/): Version 9.5.1
* [vite](https://vitejs.dev/): Version 4.3.9
#### Libraries
* [Bootstrap](https://getbootstrap.com/): Version 5.2.3
## 3. :hammer_and_wrench: Installation
***
### Back
The IDE I used for this proyect is [Apache NetBeans 17](https://netbeans.apache.org/), but you can use another if you want.

In order to run this project you need to have Java and MySQL installed in your system, for that go to the respective pages, [Mysql](https://dev.mysql.com/downloads/mysql/) and [Java](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html), download the installer and follow the instructions. After that you have to open this proyect in your IDE and configure the connection to your database as well as other parameters. Use this example as a guide: 
```
# database configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

# database connection
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name?useSSL=false&serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password
```
Great, all the configuration is set up, now you can run the server. :warning: Remember to have the database already created in MySQL, otherwise you will not be able to run the server. To create the database you can use MySQL Workbench or another administrator as phpMyAdmin.

### Front

First of all you need to install NodeJS, for that go the official page of NodeJS (https://nodejs.org/es) and follow the instructions to install this technologie in your system, which includes npm. 
Then, using npm, you have to install Angular CLI with the next command:
  ```
  npm install -g @angular/cli@latest
  ```
After this you need to install in your proyect the basic libraries with this command:
```
  npm install
 ```
Great, now you only need to install the libraries that are used in this project. Here you have the respective command for each one:

**FontAwesome**
```
  npm install @fortawesome/angular-fontawesome@0.12.x
```
**Chart.js**
```
  npm install chart.js
```
:heavy_check_mark: Now you are ready to run your project locally in an test enviroment with this command:
```
  ng serve
```
:warning: Remember that all the data is loaded from the Back End server, so you need to start the Back End server first to be able to see the data and successfully run the app. For more information visit the back end [repository](https://github.com/JulianMeneses1/Portafolio-BackEnd-AP)

## 4. :information_source: API Documentation Swagger
***
Check the full documentation of the API in this [link](https://app-personas-production.up.railway.app/swagger-ui/index.html)

## 5. :wave: Collaboration
***
Feel free to make any suggestion that you think can help improve the quality of the project! :grinning:




