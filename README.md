# Full Stack App - Authentication [Client](https://food-recipe-with-auth.onrender.com) [Server](https://food-recipe-user-auth.onrender.com)
## Features & Descriptions
* Users can signup by their first name, last name, email, and password.
* Users can log in by their email and password.
* Authenticate users can see all content like home page food, and category wise food.
* Users can search food recipes by food name and other food information.
* Food can filter by country wise.
* Users can see food details by clicking food.
* Food details page shows the food title, image, ingredients, and instructions.
### Technologies: React, Styled Components, React Router Dom, Node.js, Express.js, Mongoose, MongoDB, etc.

## Video Preview
https://user-images.githubusercontent.com/85154840/219287626-13e95fe8-a3be-4a4e-bd0e-86e1d8206496.mp4


### Following this instruction you can check API [Server](https://food-recipe-user-auth.onrender.com)

```
// user related route
route.post('/create', userController.createUser);
http://localhost:5000/create
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "example@gmail.com",
  "password": "password"
}

route.post('/login', userController.loginUser);
http://localhost:5000/login
{
  "email": "example@gmail.com",
  "password": "password"
}

route.post('/forgetPassword', userController.forgetPassword);
http://localhost:5000/forgetPassword
{
  "email": "example@gmail.com",
  "password": "passwordchange"
}
```
