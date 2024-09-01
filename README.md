# Learning Management system

LMS is a full-featured, multipurpose, premium Learning Management System built with React JS, HTML5, and CSS. It has a huge collection of reusable UI components and is integrated with the latest CSS libraries. It can be used for all types of Web applications like custom admin panel, app backend, CMS, or CRM.

# Installation

## Client
```bash
git clone 
```
```bash
cd Client
```
```bash
npm i
```
```bash
npm run dev
```


## Server
```bash
git clone https://github.com/Pushpendra-1697/Learning-Directory
```
```bash
cd Server
```
```bash
npm i
```
```bash
npm run server
```

## Note
- Add .env file in the Server directory
- File should contain
```bash
dbURL = your mongoDB URL
port = 8000
secret_key = your secret key
Salt_rounds = 5
ADMIN_GMAIL = your email
ADMIN_PASSWORD = your password
```

## Tech Stack / Libraries
- **React**
- **Redux**
- **Ant Designs**
- **Recharts**
- **NodeJs**
- **ExpressJs**
- **MongoDB**
- **Mongoose**
- **Nodemailer**
- **bcrypt**

## Deployment
- **Client**  - Vercel
- **Server**  - Render


## 🔗 Credentials for Admin

- Email - pushpendra1697@gmail.com
- Password - Push1697@
  
## 🔗 Credentials for Tutor and Student

- Email - test@gmail.com
- Password - test

## Features Completed

- Admin can regulate user access to particular data
- Account credentials are sent over mail once the user account is created
- Tutors can provide homework, assignments, and quizzes to students
- Students can monitor their performance and assess their progress using an LMS.
- Students can raise doubts
- Tutors can add responses to doubts
- Tutors can only administer (delete/edit) their courses (Quizzes, Contents)
- Admin can access to manage (delete/edit) all courses (Quizzes, Contents)
- Students can't administer (delete/edit/create) courses (Quizzes, Contents)
- Leaderboard showing top students with the maximum gaming points
- LMS can interact with email
- All Filter is working to make user-friendly UI
- Form validation

