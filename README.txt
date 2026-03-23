🚀 Backend System (Node.js + Express + MongoDB)

A backend project where I built a complete authentication system along with REST APIs and email features. The focus was on writing clean, scalable code and following good backend practices.

✨ Features
🔐 User authentication (signup, login, logout) using JWT
🔒 Passwords stored securely with hashing
⚙️ Well-structured REST APIs with proper routing
🧩 Middleware and centralized error handling
📧 Email integration for welcome messages and notifications
🗄️ MongoDB for data storage with structured schemas
📈 Built with scalability and maintainability in mind
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT, bcrypt
Email: Nodemailer


Day 1--> Created the folder structure and made a signup route, user model.
Day 2--> Implemented the signup logic and added nodemailer to send welcome email to users after successful registration.

28th feb->
-> wrapping everything in try catch block seems inefficient, should i make a custom handler/manager for something like this?

-> now that i have email services, i should add verification process!
-> password reset too , 


1st march->
-> added logout route with proper security feature
-> corrected the minor errors that were hanging around in the codebase, couldn't find them without testing the routes, 
hail INSOMNIA!

2nd march->
-> added otp gen + verification email, didnt yet add the actuall verification route , kinda confused about the flow 
-> for password reset , a email will be directly sent to user's email with a link to resetpassword route something
