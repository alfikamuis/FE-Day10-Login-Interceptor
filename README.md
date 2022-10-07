# node-token-based-authentication

## Authentication REST APIs
* GET (users list)	  **/api**
* POST (sign-in)	      **/api/signin**
* POST (sign-up)	      **/api/register-user**
* GET (user profile)	  **/api/user-profile/id**
* PUT (update user)	  **/api/update-user/id**
* DELETE (delete user)  **/api/delete-user/id**

## Install 

- open terminal
  ```sh
  cd <folder file>

  npm install
  npm install -g nodemon
  npm install bcrypt body-parser config cors dotenv express express-validator jsonwebtoken mongoose mongoose-unique-validator

  ```
- install <b>mongoDb</b>

## Start Node Server

- Open other terminal run `mongod`
  ```sh
  cd <folder file>
  mongod
  ```
- Open terminal run `nodemon`
  ```sh
  nodemon server.js
  ```

Open API URL on [http://localhost:4000/api](http://localhost:4000/api)
