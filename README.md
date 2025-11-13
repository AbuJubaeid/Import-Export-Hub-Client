# 🌐 Import Export Hub

**Import Export Hub** is a modern full-stack web platform where users can manage exports, browse global products, and import items into their personal **My Imports** section with one click. The system ensures real-time synchronization, secure user authentication, and a clean modern UI.

---

## 🚀 Project Overview

This project enables users to:

- Explore all available products globally.
- Add their own export products.
- Import products into their profile with quantity validation.
- Manage their own exports and imports.
- Enjoy a seamless, secure login/registration experience (with Google Sign-In support).

---

## 🧩 Features

### 🏗️ Layout Structure

**Header:**

- Logo + Navigation on the left
- Routes: `All Products`, `My Exports`, `My Imports`, `Add Export`
- `Login/Register` button on the right
- When logged in: shows **Logout** button and user’s profile image instead

**Footer:**

- Copyright
- Social links
- Contact information
- Additional info

---

### 🏠 Home Page

- A responsive **banner/slider**
- Displays **latest 6 products** (sorted by `createdAt: -1`)
- Products shown in a **3-column grid**
- Each product card includes:
  - Product Image
  - Product Name
  - Price
  - Origin Country
  - Rating
  - Available Quantity
  - “See Details” button → navigates to **Product Details** page
- Includes **2 additional sections** (creative/flexible design)

---

### 🔐 Authentication

#### User Login

- Login form fields:
  - Email
  - Password
- Extra options:
  - “Forget Password” link (optional)
  - “Register” link
  - **Google Sign-In** button
- Successful login → navigate to Home or desired route
- Failed login → show error via toast/message

#### User Registration

- Registration form fields:
  - Name
  - Email
  - Photo URL
  - Password
  - “Register” button
- Password validation:
  - Must contain **uppercase** & **lowercase**
  - Must be **at least 6 characters long**
- Social login (Google) available
- Successful registration → navigate to Home or desired route
- Failed registration → show error via toast/message

> ❗ Email verification and password reset are **not required** for submission.

---

### 📦 Product Details Page (Private Route)

Displays full product details including:

- Product Image, Name, Price, Rating, Origin Country, Available Quantity, Description
- “**Import Now**” button → opens a modal
- Modal allows user to input **import quantity**

**Import Rules:**

- Import quantity **cannot exceed available quantity**
- If user enters higher quantity → “Submit” button becomes **disabled**
- On successful import:
  - Product is saved to user's **My Imports**
  - Product’s available quantity is **decreased** in database using `$inc` operator

---

### 🛒 All Products Page

Displays **all products** in a 3-column grid with:

- Product Image
- Product Name
- Price
- Origin Country
- Rating
- Available Quantity
- “See Details” button → navigates to **Product Details**

---

### 📥 My Imports Page (Private Route)

Shows all products imported by the logged-in user.

Each item includes:

- Product Image
- Product Name
- Price
- Rating
- Origin Country
- Imported Quantity
- “Remove” button → deletes from UI and database
- “See Details” → navigates to Product Details

---

### 🚢 Add Export/Product Page (Private Route)

Form for users to add new export products.

Form fields:

- Product Name
- Product Image (URL)
- Price
- Origin Country
- Rating
- Available Quantity
- “Add Export/Product” button

**On submission:**

- Data saved to database
- Product instantly appears in “All Products” page

---

### 📤 My Exports Page (Private Route)

Displays all export products added by the logged-in user.

Each item shows:

- Product Image
- Product Name
- Price
- Origin Country
- Rating
- Available Quantity
- “Delete” button → removes from database and UI
- “Update” button → opens modal with pre-filled form for editing

**Update Modal:**

- Users can modify any field
- On “Submit”, data updates in both database and UI instantly

---

## ⚙️ Tech Stack

**Frontend:**

- React.js
- Tailwind CSS
- React Router
- Context API / Firebase Auth (for user authentication)
- SweetAlert2 / Toastify for alerts

**Backend:**

- Node.js
- Express.js
- MongoDB (Atlas)
- JWT (for private routes)

---

## 🔒 Private Routes

The following routes require authentication:

- `/add-export`
- `/my-exports`
- `/my-imports`
- `/product/:id`
