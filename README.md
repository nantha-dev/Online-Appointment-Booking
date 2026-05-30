# 📅 MERN Appointment Booking System

A full-stack, production-ready appointment booking platform with a modern landing page, real‑time slot availability, and an admin dashboard. Built with the MERN stack (MongoDB, Express.js, React, Node.js).

![Hero Screenshot](https://via.placeholder.com/800x400?text=Appointment+Booking+Demo)
> *Replace with actual screenshot of your app*

---

## ✨ Features

### 👤 User Side
- **Landing Page** – Hero section, services grid, how‑it‑works, testimonials, live stats.
- **Service Browsing** – View all services with name, icon, description, duration & price.
- **Smart Booking Form** – Select service, pick a date (react‑calendar), see only **available time slots** (no double‑booking).
- **Real‑time Validation** – Instant feedback on name, email, 10‑digit phone.
- **Instant Confirmation** – Toast notifications on success/error.
- **Fully Responsive** – Mobile‑first design with Tailwind CSS.
- **Smooth Animations** – Framer Motion powered entry animations.

### 👑 Admin Dashboard
- **View All Bookings** – Table with name, email, service, date, time slot, status.
- **Manage Services** – List existing services, add new services (name, description, icon, slots, duration, price).
- **Real‑time Updates** – New services appear immediately on the user frontend.

---

## 🛠️ Tech Stack

| Layer       | Technology                                                                 |
|-------------|----------------------------------------------------------------------------|
| Frontend    | React (Vite), Tailwind CSS, Framer Motion, Lucide React, Axios, react‑calendar, react‑hot‑toast |
| Backend     | Node.js, Express.js, MongoDB + Mongoose, CORS, dotenv                      |
| Dev Tools   | Nodemon, ESLint (optional)                                                 |

---

## 📁 Folder Structure
mern-appointment-booking/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ ├── Booking.js
│ │ └── Service.js
│ ├── controllers/
│ │ ├── bookingController.js
│ │ ├── serviceController.js
│ │ └── statsController.js
│ ├── routes/
│ │ ├── bookingRoutes.js
│ │ ├── serviceRoutes.js
│ │ └── statsRoutes.js
│ ├── middleware/
│ │ └── errorHandler.js
│ ├── seed.js
│ ├── .env
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Hero.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── HowItWorks.jsx
│ │ │ ├── BookingForm.jsx
│ │ │ ├── Testimonials.jsx
│ │ │ ├── Stats.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── Navbar.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ └── Admin.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── utils/
│ │ │ └── validation.js
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── .env
│ ├── package.json
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── vite.config.js
└── README.md

text

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or v20 recommended)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-appointment-booking.git
cd mern-appointment-booking
2. Backend Setup
bash
cd backend
npm install
Create a .env file in backend/:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/appointment_booking
Seed the database with initial services:

bash
npm run seed
Start the backend server:

bash
npm run dev
# Server runs on http://localhost:5000
3. Frontend Setup
Open a new terminal:

bash
cd frontend
npm install
Create a .env file in frontend/:

env
VITE_API_URL=http://localhost:5000/api
Start the frontend dev server:

bash
npm run dev
# Frontend runs on http://localhost:3000
4. Access the App
User landing: http://localhost:3000

Admin dashboard: http://localhost:3000/admin

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/services	Fetch all active services
POST	/api/services	Add a new service (admin)
GET	/api/bookings	Get all bookings (admin)
POST	/api/bookings	Create a new booking
GET	/api/bookings/available-slots?serviceId=&date=	Get available time slots
GET	/api/stats	Get dashboard statistics
🧪 How It Works (User Journey)
User lands on the homepage, browses services.

Clicks Book Now → scrolls to the booking form (service pre‑selected).

Selects a date (calendar shows only future dates).

System fetches and displays only available time slots for that service+date.

Fills name, email, phone (real‑time validation).

Submits → backend checks again for conflicts → saves to MongoDB.

Success toast appears, form resets.

🖥️ Admin Dashboard
Open /admin – no authentication for simplicity (add login in production).

Bookings tab – view all customer bookings.

Services tab – list services, add new ones with custom slots/duration/price.

⚠️ The admin panel is open; implement authentication (JWT) before deploying to production.

🎨 Customization
Services & Slots – Edit backend/seed.js and re‑run npm run seed.

Testimonials – Modify frontend/src/components/Testimonials.jsx.

Colors / Theme – Adjust Tailwind classes or edit tailwind.config.js.

Icons – Use any icon from Lucide and update the iconMap in Services.jsx.

📸 Screenshots
Landing Page	Booking Form	Admin Dashboard
https://via.placeholder.com/400x200?text=Landing	https://via.placeholder.com/400x200?text=Booking	https://via.placeholder.com/400x200?text=Admin
Replace placeholders with actual screenshots from your app.

🚧 Future Enhancements
User authentication (JWT) + admin login

Email/SMS reminders for appointments

Cancel / reschedule bookings

Payment integration (Stripe)

Export bookings to CSV/PDF

Review & rating system for services

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT

🙏 Acknowledgements
React

Vite

Tailwind CSS

Framer Motion

Lucide Icons

MongoDB

Express.js

