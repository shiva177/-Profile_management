# 🟢 User Profile Management API

A RESTful API for user registration, profile management, JWT authentication, and MongoDB integration.  

---

## 🚀 Features
- User Registration & Profile Management  
- JWT Authentication for Protected Routes  
- MongoDB for Data Storage  
- Error Handling  

---

## 🛠 Tech Stack
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (JSON Web Tokens)  
- bcrypt.js  

---

## 🟢 Prerequisites
Ensure you have the following installed:  
- Node.js  
- MongoDB  
- Postman (for API testing)  

---

## 📝 Project Setup

```bash
# Clone the repository
git clone https://github.com/shiva177/-Profile_management.git
cd -Profile_management

# Install dependencies
npm install

# Create a .env file in the root directory
echo "PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/userProfileDB
JWT_SECRET=your_jwt_secret" > .env

# Start MongoDB server
mongod

# Start the application
npm start


