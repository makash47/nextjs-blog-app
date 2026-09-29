# Blogify

A modern full-stack blogging platform built with **Next.js**, **MongoDB**, and **Better Auth**. Blogify provides a clean reading experience for visitors and a secure dashboard for authenticated users to manage their own blog posts.

## ✨ Features

### Public Features

* Modern responsive homepage
* Featured blogs section
* Latest blogs section
* Browse all blogs
* Blog categories
* Category-based blog filtering
* Individual blog pages
* Search-friendly blog URLs using slugs
* Contact form
* Responsive UI
* Dark/light theme support

### Authentication

* User signup with email and password
* Email verification with **Better Auth + Resend**
* Secure login
* Session management
* Protected routes
* Admin and regular-user roles
* Role-based blog access

### Blog Management

* Create blog posts
* Edit blog posts
* Delete blog posts
* Featured blog support
* Category support
* Blog ownership using `authorId`
* Admin can manage all blogs
* Regular users can manage their own blogs

### Database

* MongoDB with Mongoose
* Better Auth authentication collections
* Contact message storage
* Blog ownership relationships

### Pagination

* Blog listing pagination
* 8 blogs per page
* URL-based pagination using query parameters

Example:

```text
/blogs?page=1
/blogs?page=2
/blogs?page=3
```

---

## 🛠️ Tech Stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| Next.js      | Full-stack React framework       |
| React        | UI development                   |
| JavaScript   | Application logic                |
| Tailwind CSS | Styling                          |
| shadcn/ui    | UI components                    |
| Lucide React | UI icons                         |
| React Icons  | Brand icons                      |
| MongoDB      | Database                         |
| Mongoose     | MongoDB ODM                      |
| Better Auth  | Authentication and authorization |
| Resend       | Email delivery                   |
| Sonner       | Toast notifications              |

---

## 📁 Project Structure

```text
blogify/
│
├── app/
│   ├── admin/
│   │   ├── create/
│   │   │   └── page.jsx
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...all]/
│   │   │       └── route.js
│   │   ├── blogs/
│   │   │   └── route.js
│   │   └── contact/
│   │       └── route.js
│   │
│   ├── blogs/
│   │   ├── [slug]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   │
│   ├── categories/
│   │   ├── [category]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   │
│   ├── contact/
│   │   └── page.jsx
│   │
│   ├── login/
│   │   └── page.jsx
│   │
│   ├── signup/
│   │   └── page.jsx
│   │
│   ├── layout.js
│   ├── page.jsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── BlogCard.jsx
│   ├── Categories.jsx
│   ├── DeleteButton.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ModeToggle.jsx
│   ├── Navbar.jsx
│   └── WhyBlogify.jsx
│
├── lib/
│   ├── auth-client.js
│   ├── auth.js
│   ├── data.js
│   ├── email.js
│   └── mongodb.js
│
├── models/
│   ├── Blogs.js
│   └── Contact.js
│
├── public/
│
├── .env.local
├── next.config.mjs
├── package.json
└── README.md
```

---


### Blog ownership

Each blog contains an `authorId` that references the Better Auth user's ID.

Example:

```json
{
  "title": "Getting Started with Next.js",
  "category": "Next.js",
  "authorId": "user-id-here"
}
```

This allows Blogify to determine who owns each blog.

---

## 🔐 Authentication & Authorization

Blogify uses Better Auth for authentication.

### Regular User

A regular user can:

* Sign up
* Verify their email
* Log in
* Create blogs
* View their own blogs in their dashboard
* Edit their own blogs
* Delete their own blogs

### Admin

The admin can:

* Access the admin dashboard
* View all blogs
* Create blogs
* Edit blogs
* Delete any blog
* Manage content across the platform

### Ownership Logic

The server determines the logged-in user's identity from the Better Auth session.

For a regular user:

```js
Blog.find({
  authorId: session.user.id
});
```

For an admin:

```js
Blog.find();
```

The `authorId` is never trusted from the client. It is added on the server using the authenticated session.

---

## ✉️ Email Verification

Blogify uses **Resend** together with **Better Auth** for email verification.

The signup flow is:

```text
User Signup
     ↓
Better Auth creates account
     ↓
Verification URL generated
     ↓
Resend sends email
     ↓
User clicks verification link
     ↓
Email becomes verified
     ↓
User can log in
```

During local development, the Better Auth URL can be:

```env
BETTER_AUTH_URL=http://localhost:3000
```

For production, replace it with the deployed application URL.

---

## 📝 Blog Data Model

A blog contains fields such as:

```text
title
slug
category
image
excerpt
content
featured
authorId
createdAt
updatedAt
```

### Featured Blogs

Featured posts are controlled through:

```js
featured: true
```

The homepage's Featured Blogs section only retrieves featured posts.

### Latest Blogs

The homepage retrieves the newest posts using:

```js
.sort({ createdAt: -1 })
.limit(3)
```

---

## 📄 Blog Pagination

The Blogs page uses URL-based pagination.

The application displays **8 blogs per page**.

```text
/blogs?page=1
```

returns the first 8 blogs.

```text
/blogs?page=2
```

returns the next 8 blogs.

The offset is calculated as:

```js
const skip = (page - 1) * limit;
```

MongoDB then uses:

```js
Blog.find()
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit);
```

---

## 📂 Categories

Categories are retrieved dynamically from blog data.

When a visitor selects a category:

```text
/categories/Next.js
```

Blogify queries MongoDB for blogs matching that category.

```js
Blog.find({
  category
});
```

Categories containing spaces or special characters are URL-encoded with:

```js
encodeURIComponent(category);
```

and decoded on the category page with:

```js
decodeURIComponent(category);
```

---

## 📬 Contact Form

Visitors can submit:

```text
Name
Email
Subject
Message
```

The submission is sent to:

```text
POST /api/contact
```

and stored in MongoDB through the `Contact` Mongoose model.

The flow is:

```text
Contact Form
     ↓
POST /api/contact
     ↓
Route Handler
     ↓
Mongoose
     ↓
MongoDB
```

---

## 🌙 Theme

Blogify supports light and dark themes using `next-themes`.

The theme is controlled through the `ModeToggle` component.

Example:

```text
Light
Dark
System
```

The application uses:

```jsx
<html lang="en" suppressHydrationWarning>
```

to support theme changes on the HTML element.

---


## 📌 Future Improvements

Possible future additions include:

* Google authentication
* Forgot password
* Password reset
* Resend verification email button
* Rich text editor
* Image upload/storage
* Blog search
* Advanced category filtering
* Admin statistics dashboard
* Author profiles
* Comments
* Likes/bookmarks
* SEO metadata improvements
* Open Graph images
* Rate limiting
* Automated tests

---

## 📄 License

This project is for learning and portfolio purposes.

---

## 👨‍💻 Author

**M Aakash**

Frontend / Web Developer 

Built with:

```text
Next.js
React
MongoDB
Better Auth
Resend
Tailwind CSS
shadcn/ui
```

---

⭐ If you find this project useful, consider giving the repository a star.

```
