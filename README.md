# 🏠 RealEstateCo

🌍 **Live Demo** → [RealEstateCo on Vercel](https://real-estate-co-opal.vercel.app/)  

RealEstateCo is a **modern real estate platform** built with **React + Vite** and styled using **Tailwind CSS**.  
It allows users to **browse properties, view detailed listings, explore agents, and send inquiries** — all in a **clean, responsive, and user-friendly interface**.  

---

## 📖 Table of Contents
- ✨ [Features](#-features)  
- 🛠️ [Tech Stack](#️-tech-stack)  
- 🏗️ [Project Flow](#-project-flow)  
- 🖥️ [Usage Guide](#️-usage-guide)  
- 📂 [Project Structure](#-project-structure)  

---

## ✨ Features

✅ **Home Page** – Hero banner + featured properties  
✅ **Listings Page** – Explore all properties with search & filters  
✅ **Property Details Page** – Detailed information for each property 🏡  
✅ **Agents Page** – Agent directory with profiles 👨‍💼👩‍💼  
✅ **Contact Page** – Inquiry form 📩  
✅ **Search & Filter** – Filter by location, price, property type 🔎  
✅ **Responsive Design** – Optimized for desktop 💻, tablet 📱, and mobile 📲  
✅ **Reusable Components** – Navbar, Footer, Cards, PropertyCard 🔧  

---

## 🛠️ Tech Stack

- ⚛️ **React + Vite** → Fast frontend framework & bundler  
- 🎨 **Tailwind CSS** → Utility-first styling  
- 🧭 **React Router** → For navigation between pages  
- 📊 **Static Data (JSON/JS)** → For properties & agents  
- 🚀 **Vercel** → Hosting & deployment  

---

## 🏗️ Project Flow

Here’s how a user interacts with the app:

1. **🏡 Home Page** – User lands and sees featured properties.  
2. **📋 Listings Page** – Browse all available properties with filters.  
3. **🔍 Property Details Page** – Click a property → open details page with description, price, images.  
4. **👥 Agents Page** – View list of real estate agents with their contact info.  
5. **✉️ Contact Page** – Submit an inquiry form.  

👉 **Flow**: `Discover → Filter → Explore → Connect`  

---

## 🖥️ Usage Guide

- 🏡 **Browse Properties** → Navigate to Listings and explore available homes.
- 🔍 **Use Filters** → Filter by price, location, and type.
- 📄 **Property Details** → Click any property card to view full details.
- 👨‍💼 **Meet Agents** → Check out profiles of listed real estate agents.
- ✉️ **Contact** → Use the inquiry form to reach out directly.

---

## 📂 Project Structure

Here’s the complete folder structure of the project:  

```bash
RealEstateCo/
├── public/                        # Public assets (images, icons, etc.)
│   └── (property images, agent photos)
├── src/
│   ├── components/                # 🔧 Reusable UI components
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Footer.jsx             # Footer section
│   │   ├── FilterBar.jsx          # Filter bar for listings
│   │   └── PropertyCard.jsx       # Property preview card
│   │
│   ├── pages/                     # 📄 Main pages
│   │   ├── Home.jsx               # Landing page
│   │   ├── Listings.jsx           # Property listings page
│   │   ├── PropertyDetails.jsx    # Single property details page
│   │   ├── Agents.jsx             # Agent listing page
│   │   ├── AgentDetails.jsx       # Agent profile card
│   │   └── Contact.jsx            # Contact form page
│   │
│   ├── contxt/
│   │   └── FilterContext.jsx      # Filter context for manage a filter state globally
│   │
│   ├── data/                      # 📊 Static dataset
│   │   ├── properties.js          # Property data (JSON/JS format)
│   │   └── agents.js              # Agents data
│   │
│   ├── App.jsx                    # ⚛️ Main app (routes defined here)
│   ├── App.css                    # Main css 
│   └── main.jsx                   # Entry point (ReactDOM rendering)
│
├── .gitignore                     # Git ignore rules
├── package.json                   # NPM dependencies & scripts
├── vite.config.js                 # Vite config
├── tailwind.config.js             # Tailwind CSS configuration
├── eslint.config.js               # ESLint rules
└── README.md                      # Project documentation
