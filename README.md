
 # Task Manager API

A simple Task Manager REST API built with pure Node.js without using frameworks like Express.

This project was built mainly to understand how backend development works internally by creating everything manually, including:
- Routing system
- Middleware system
- Authentication
- Authorization
- Controllers
- Services
- Models
- Route parameter extraction
- File-based database

Instead of using MongoDB or PostgreSQL, this API uses the Node.js file system (`fs`) module and JSON files as a database.

---

# Why I Built This

The main purpose of this project is learning backend development deeply by understanding how frameworks like Express work internally.

I wanted to practice:
- Creating HTTP servers
- Building a custom router
- Writing middleware manually
- Handling requests and responses
- Authentication & authorization
- CRUD operations
- Working with the file system
- Backend architecture

---

# Technologies Used

- Node.js
- JavaScript
- File System (`fs`) as database

---

# Project Structure

```bash
project/
│
├── controller/
│    |_ authController.js
|    |_createUserController.js
|    |_deleteAllUserController.js
|    |_deleteUserController.js
|    |_getAllUserController.js
|    |_getUserController.js
|    |_logoutController.js
|    |_resetPasswordController.js
|    |_userActivityController.js
|
├── middleware/
│   ├── requireAuth.js
│   ├── requireRole.js
│   └── routeParameters.js
│
├── model/
|    |_userModel.js
|    |_taskModel.js
│
├── routes/
|    |_authRoute.js
|    |_createUserRoute.js
|    |_deleteAllUserRoute.js
|    |_deleteUserRoute.js
|    |_getAllUsersRoute.js
|    |_getUserRoute.js
|    |_resetPasswordRoute.js
|    |_userActivityRoute.js
│
├── service/
|    |_createUser.js
|    |_deleteAllUser.js
|    |_deleteUser.js
|    |_getAllUsers.js
|    |_getUser.js
|    |_loginauth.js
|    |_logoutService.js
|    |_PassowrdReset.js
|    |_usrActivity.js
│
├── utils/
│   |_dataAcess.js
|   |_encrypt-decrypt.js
|   |_findUser.js
|   |_hash.js
|   |_idGenrator.js
|   |_send.js
|   |_sendError.js
|   |_sessionManager.js
│
├── database/
│   ├── users.json
│   └── tasks.json
│
├── server.js
└── package.json
```

---

# Features

## Authentication
- User login
- Authentication middleware
- Protected routes

## Authorization
- Role-based access control
- Admin-only routes

## User Management
Admin can:
- Create users
- Update users
- Delete users
- View all users

## Task Management
Admin can:
- Create tasks
- Update tasks
- Delete tasks
- View all tasks

Users can:
- View tasks
- Manage their tasks depending on permissions

---

# Available API Endpoints

# Authentication Routes

## Login

```http
POST /login
```

Example Body:

```json
{
  "username": "Task-Manager-Admin",
  "password": "TMA3"
}
```

---

# User Routes

## Create User

```http
POST /user
```
Example Body :

Example Body:

```json
{
  "username": "first-user",
}
```

## Get All Users

```http
GET /users
```
## Get User

```http
GET /user/:id
```
## Delete All Users

```http
DELETE /users
```

## Delete User

```http
DELETE /user/:id
```
## Reset Password

```http
PATCH /user/:id
```
## User Activity

```http
PATCH /user/:id?active=Boolean
```
## LOgout

```http
POST /logout
```

# Task Routes

## Create Task

```http
POST /tasks
```

## Get All Tasks

```http
GET /tasks
```

## Update Task

```http
PUT /task/:id
```

Example:

```http
PUT /task/5
```

## Delete Task

```http
DELETE /task/:id
```

Example:

```http
DELETE /tasks/5
```

---

# Middleware

This project includes custom middleware implementations.

## requireAuth
Checks if the user is authenticated.

## requireRole
Checks user roles and permissions.

## routeParameters
Custom route parameter extractor.

Example:

```js
req.params.id
```

---

# Database

This project does not use a real database.

Instead, data is stored inside JSON files using the Node.js `fs` module.

Example:
- `users.json`
- `tasks.json`

This helped me understand:
- File operations
- Data persistence
- CRUD logic
- Backend architecture

---

# Running the Project

## Install dependencies

```bash
npm install
```

## Start the server

```bash
node server.js
```

---

# Example Request

## Delete User

```http
DELETE /user/2
```

---

# Example Response

```json
{
  "message": "User deleted successfully"
}
```

---

# Concepts Practiced

- Node.js HTTP module
- REST API development
- Custom routing
- Middleware systems
- Request parsing
- Route parameters
- Authentication
- Authorization
- File handling
- Error handling
- Backend architecture

---

# Future Improvements

- JWT Authentication
- Refresh Tokens
- Better validation
- Pagination
- Database integration
- Testing
- API documentation
- Better folder organization

---

# Author 
 Addis

Built for learning and understanding backend development with pure Node.js.
>>>>>>> 87ab063 (doc : update the readme)
