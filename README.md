# Clueso.io Clone

A full-stack clone of **Clueso.io** built as part of a technical assignment to demonstrate product understanding, clean architecture, and full-stack engineering skills.  
The project focuses on replicating core workflows such as authentication, feedback collection, and AI-powered insights.

---

## About

This project recreates the essential functionality of Clueso.io, allowing users to submit product feedback and view AI-generated insights based on their inputs.  
The emphasis is on **functionality, system design, and extensibility** rather than pixel-perfect UI replication.

---

## Features Implemented

- User authentication with email/password  
- Google OAuth authentication  
- JWT-based session management  
- Protected dashboard  
- Feedback submission and retrieval  
- User-specific feedback isolation  
- AI-powered feedback insights (mocked)  
- Clean, internal-dashboard style UI  
- Architecture diagrams and execution outputs  

---

## Tech Stack

### Frontend
- React.js  
- React Router  
- Context API  
- Axios  
- Tailwind CSS (v3)  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT Authentication  
- Passport.js (Google OAuth)  

---

## Project Structure

```
clueso-clone/
├── frontend/
│   └── src/
│       ├── pages/
│       ├── context/
│       ├── services/
│       └── index.css
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── models/
│       ├── middleware/
│       └── services/
│
├── Architecture/
│   ├── system-architecture.png
│   └── backend-flow.png
│
├── Outputs/
│   ├── DOM_events.json
│   └── backend-run.mp4
│
└── README.md
```

---

## Setup and Installation

### Prerequisites
- Node.js (v18+ recommended)  
- MongoDB Atlas account  
- Google OAuth credentials  

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

- Frontend runs on: `http://localhost:3000`  
- Backend runs on: `http://localhost:5000`  

---

## Notes

- AI insights are mocked using rule-based analysis and designed to be easily replaced with a real LLM.
- Architecture diagrams and execution outputs are included to demonstrate system design and runtime behavior.
