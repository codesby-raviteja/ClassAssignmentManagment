# Class Assignment Management App

## 📌 Overview

**Class Assignment Management App** is a streamlined platform designed to enhance the assignment workflow between teachers and students. It enables teachers (or admins) to assign tasks either to the entire class or to specific students based on individual requirements. Students can log in to their accounts, view their assigned tasks, complete them, and submit their work in PDF format. Built with Supabase, it ensures secure authentication, structured data management, and efficient file storage.

## 🚀 Features

### 🔑 Authentication

- User authentication powered by Supabase.

- Role-based access for Teachers (Admins) and Students.

### 📂 Assignment Management

- Teachers/Admins can assign tasks to all students or specific individuals.

- Students can log in to view their assigned tasks.

- Assignments must be completed and submitted in PDF format.

### 🗂️ Database & Storage

- Assignments and submissions are securely stored using Supabase Database & Storage.

- Students can upload their completed assignments as PDF attachments.

### 📊 Admin Dashboard

- Admins can review and download student submissions.

- Track assignment completion status.

#  🛠️ Tech Stack

**Frontend:** React, Redux-tool-kit, Tailwind CSS

**Backend:** Supabase (Auth, Database, Storage)

**Deployment:** Netlify 


## 🛠️ Pending
- Form Error Handling (working on it) 

# 🏗️ Installation & Setup
### 1️⃣ Clone the Repository

- git clone https://github.com/codesby-raviteja/ClassAssignmentManagment.github

### 2️⃣ Install Dependencies

- npm install

### 3️⃣ Set Up Supabase

- Create a Supabase account and a new project.

- Get the API keys and Database URL from the Supabase dashboard.

- Create a .env file in the root directory and add:

     - VITE_SUPABASE_URL=your-supabase-url 
     - VITE_SUPABASE_ANON_KEY=your-anon-key

### 4️⃣ Run the Project

- npm run dev

## 📌 Future Improvements

- Improve UI/UX with better design elements.

- Implement grading and feedback system.


