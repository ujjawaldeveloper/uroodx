# **UroodX - International Shipping Aggregator**

Welcome to **UroodX**! 🚀  
UroodX is a logistics aggregation platform that allows users to compare and book international shipping services seamlessly. Built with **Next.js, TailwindCSS, and JavaScript** for the frontend, and **Express.js with MongoDB** for the backend, this application provides an efficient way to find the best shipping partners based on pricing, shipping time, and paperwork requirements.

---

## **🌟 Features**

- **User Roles**: Supports Buyers and Admins with personalized dashboards.
- **Authentication**: Secure login system for users.
- **Subscription Model**: Users must subscribe to access premium shipping quotes and analytics.
- **Quote Comparison**: Fetches real-time quotes from different couriers with UroodX discounts.
- **Shipment Booking**: Redirects users to courier portals with unique UX reference codes.
- **Tracking System**: Tracks shipments directly via UroodX dashboard with real-time updates.
- **Payments**: Subscription-based model and payments handled directly via courier portals.
- **Admin Dashboard**: Manages users, couriers, and transactions.

---

## **🚀 Getting Started**

Follow these steps to set up the project on your local machine:

### **1. Clone the Repository**
```bash
git clone https://github.com/uy-in/uroodx.git
cd uroodx
```

### **2. Frontend Setup**
Navigate to the frontend directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### **3. Backend Setup**
Navigate to the backend directory:
```bash
cd ../backend
```
Install dependencies:
```bash
npm install
```
Create a `.env` file in the backend folder with the following variables:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
API_KEY=your_api_key_for_courier_integration
```
Start the backend server:
```bash
npm run dev
```

### **4. Combined Start**
To run both frontend and backend together, you can use **concurrently**:
```bash
npm run start:all
```

### **5. Project Structure**
```bash
uroodx/
├── frontend/          # Next.js frontend
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── services/      # API interaction logic
│   ├── context/       # Global state management
│   └── ...
├── backend/           # Express.js backend
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── middlewares/   # Middleware functions
│   ├── config/        # Config files
│   └── ...
├── .gitignore         # Git ignore file
├── README.md          # Project documentation
└── ...
```

---

## **6. Live Demo**

- **Live version**: [https://uroodx.netlify.app](https://uroodx.netlify.app)

---

## **7. Built With**

- **Frontend**: Next.js, TailwindCSS, JavaScript
- **Backend**: Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Shipping API Integration**: Real-time data from DHL, FedEx, Aramex, etc.
- **Deployment**: Vercel (Frontend), AWS EC2 (Backend)

---

### **8. Thank You for Visiting!** 🎉

We appreciate your interest in **UroodX**! Feel free to explore, use, and contribute. If you find this project useful, please ⭐ the repository!

For any inquiries, feel free to reach out.

---

- **Talk to me**: [Schedule a meeting](https://calendly.com/uyin/talk)
- **GitHub**: [https://github.com/uy-in](https://github.com/uy-in)
- **LinkedIn**: [https://www.linkedin.com/in/uyin](https://www.linkedin.com/in/uyin)
- **Email**: [uy2110101@gmail.com](mailto:uy2110101@gmail.com)

---

