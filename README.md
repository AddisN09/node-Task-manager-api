 # 🚀 Task Manager API (Pure Node.js Backend)

A **low-level Task Management REST API** built using **pure Node.js (no frameworks)** to deeply understand backend fundamentals such as routing, authentication, session management, and role-based access control.

---

## 📌 Overview

This project simulates a real-world task management system with two roles:

- **Admin**
- **User**

It focuses on building backend logic from scratch to understand how frameworks like Express work internally.

---

## 🎯 Key Goals of This Project

- Build a backend without Express or external frameworks
- Understand HTTP server creation in Node.js
- Implement session-based authentication manually
- Design role-based access control (RBAC)
- Build a real task workflow system

---

## ⚙️ Features

### 🔐 Authentication System
- Session-based login/logout
- Secure session tracking
- Role-based authorization (Admin / User)

### 👨‍💼 Admin Features
- Create and manage users
- Create tasks
- Assign tasks to users
- Approve or reject task completion requests
- View system-wide data (users + tasks)

### 👤 User Features
- View assigned tasks
- Update personal profile
- Submit task completion requests
- Track task status

### 📋 Task Workflow


---

## 🏗️ System Architecture

This project is built using a **layered architecture approach**:


---

## 🧠 What I Learned

- How Node.js HTTP server works internally
- Building routing system without Express
- Handling sessions manually
- Designing RBAC (Role-Based Access Control)
- Structuring backend applications properly
- Managing request/response lifecycle

---

## 📁 Project Structure

```bash
.
├── server.js
├── routes/
├── controllers/
├── services/
├── middlewares/
├── utils/
├── models/
└── sessions/

POST /login
POST /logout
GET    /users          (Admin only)
POST   /users          (Admin only)
PUT    /users/:id
DELETE /users/:id      (Admin only)
GET    /tasks
POST   /tasks          (Admin only)
PUT    /tasks/:id
DELETE /tasks/:id      (Admin only)
POST   /tasks/:id/complete-request


git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
