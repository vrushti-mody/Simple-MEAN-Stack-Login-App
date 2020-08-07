
<p align="center">
  

  <h3 align="center">MEAN Stack Login App</h3>
  <p align="center">
     A simple application that uses passport.js for login sessions with google sign in functionality available. Clone this repository if you want to get started with Angular.js
    
    
    This project is developed as a part of an assignment for Foreign Admits hiring.
   
   [Report Bug](https://github.com/vrushti-mody/Simple-MEAN-Stack-Login-App/issues)
    ·
    [Submit Feature](https://github.com/vrushti-mody/Simple-MEAN-Stack-Login-App/issues)
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Technology Stack](#technology-stack)
  - [How to Use](#implementation)
  - [Contributors](#contributors)

## Technology Stack

##### Technology Stack

- Front End: Angular
- Backend: NodeJs
- Database: MongoDB
- Cors for cross origin settings
- Bcrypt for hashing password
- Passport for authentication
- Google auth for google login
- Express session for user session
- Ejs as the templating engine for Node.js

##### Implementation


* Register Page: The register page is used to register an account into the system. It takes three basic details: name, email, password.

* Login Page: It is used to log in to the system. It checks if the user credentials are valid.

* Login using Google: An option to log in using google is provided if the user does not want to register and directly log in

* Home Page: The home page displays user details. They are incomplete on the first login

* Settings Page: The details of the home page can be updated using the settings page.

* Logout: The logout function destroys a session and redirects the user to login page


##### Validations:

- Valid email
- No details in the form can be left empty
- Password should match confirm password
- Cannot access other routes without login
- Cannot view password from database
- Session is destroyed on logout
- Error in routes redirect to home page if logged in and login component if logged out

### How To Use

1. git clone `https://github.com/vrushti-mody/Simple-MEAN-Stack-Login-App.git`

2. Navigate to the project folder

3. For frontend: `cd frontend`

4. Run the command `npm install`

5. Run the command `ng serve`

6. For backend 'cd expressapp'

7. Run the command `npm install`

8. Add the .env file credentials

Sample file:

```
  GOOGLE_CLIENT_ID= google client id
  
  GOOGLE_CLIENT_SECRET=google client secret
  
  CALLBACK_URL="callback url"
  
  MONGODB=mongo url
```
9. Start Mongodb

10. Run the command `npm start`

11. Visit the app on [`localhost:4200`](http://localhost:4200)


### Contributors

- [Vrushti Mody](https://github.com/vrushti-mody)
