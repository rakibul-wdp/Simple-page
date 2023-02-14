# Full Stack Food Recipe App [Live Site]()

## User Authentication

### Route Here

### Following this instruction you can check API

```
// user related route
route.post('/create', userController.createUser);
http://localhost:5000/create
{
  "username": "Example",
  "email": "example@gmail.com",
  "password": "password"
}

route.post('/login', userController.loginUser);
http://localhost:5000/login
{
  "username": "Example",
  "password": "password"
}

route.post('/forgetPassword', userController.forgetPassword);
http://localhost:5000/forgetPassword
{
  "username": "Example",
  "password": "passwordchange"
}
```

### Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- JsonWebToken (JWT)
- bcrypt
- body-parser
- dotenv
