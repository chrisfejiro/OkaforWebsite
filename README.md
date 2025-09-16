# 🛒 Okafor Stores – Shopping Cart App

A simple **shopping cart application** built with **Next.js (App Router)**, **React Context API**, and **TypeScript**.  
It provides product browsing, searching, filtering, sorting, and a cart with quantity management.

---

## ✨ Features

### 🏠 Home Page
- Displays products in a grid with **image, name, price, weight, and description**
- Search products by name
- Filter products by category
- Sort products by:
  - ✅ Price (ascending/descending)
  - ✅ Weight (ascending/descending)
- Add products to cart with one click

### 🛒 Cart Page
- View items added to cart
- Increase or decrease quantity
- Remove items from the cart
- View **total items** and **subtotal price**
- Clear the cart
- Button to **continue shopping**

### 🌐 Navbar
- Displays store logo (`Okafor Stores`)
- Integrated search bar
- Cart icon with **badge for total items**
- Dropdown showing subtotal & quick access to Cart
- Dummy user profile dropdown

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React Context API](https://react.dev/reference/react/useContext) – for global cart state
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [DaisyUI](https://daisyui.com/) – prebuilt UI components (used for buttons, navbar, dropdowns)

---

## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/your-username/okafor-stores.git
cd okafor-stores
2. Install dependencies
bash
Copy code
npm install
3. Run the development server
bash
Copy code
npm run dev
Open your browser at http://localhost:3000 🎉
d screenshot here)

⚡ Future Improvements
✅ Persist cart in localStorage so items remain after refresh

✅ Add checkout page

✅ User authentication for saving carts

✅ Replace mock data with real bac
