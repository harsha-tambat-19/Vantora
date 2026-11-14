# Vantora - AI-Powered Enterprise Management Platform

**Customized and maintained by Harsha Tambat**

Vantora is an AI-powered enterprise management platform built using the MERN stack (React, Node.js, Express.js, MongoDB) and Google Gemini AI.

## Setup

**Prerequisites:**
- Node.js 16+
- MongoDB (Atlas or local)
- Gemini API key

**Installation:**

```bash
npm run install-all
```

**Environment (.env in server/):**

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secure_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

**Run:**

```bash
# Start Backend and Frontend together
npm run dev
```

Access at `http://localhost:5173`

## Demo Login

- Email: `admin@erp.com`
- Password: `password123`

(Also available: manager@erp.com, employee@erp.com)

## Features

- Dashboard with KPIs and charts
- Inventory management with low stock alerts
- Order tracking and management
- Finance and transaction management
- Employee management
- AI assistant for business queries
- JWT-based authentication
- Protected routes

## Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT

**Frontend:** React 18, Vite, Tailwind CSS, Recharts

**AI:** Google Generative AI (Gemini 2.5 Flash)

Example AI queries:
- "How many orders are pending?"
- "Which department has the most employees?"
- "What's our net profit?"

The AI analyzes relevant business data from the database and provides intelligent insights.

## Architecture

Vantora follows a **Modular Monolithic Architecture**.

- **Presentation Layer:** React.js frontend
- **Application Layer:** Node.js and Express.js REST APIs
- **Data Layer:** MongoDB with Mongoose ODM
- **AI Integration:** Google Gemini API

### Application Flow

```text
User
 |
 v
React Frontend
 |
 v
Axios API Client
 |
 v
Express.js REST API
 |
 +------ Authentication
 |
 +------ Dashboard
 |
 +------ Inventory
 |
 +------ Orders
 |
 +------ Finance
 |
 +------ Employees
 |
 +------ AI Assistant
 |
 v
Mongoose ODM
 |
 v
MongoDB Database
```

## 📁 Project Structure

```text
Vantora/
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── Transaction.js
│   │   └── Employee.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── inventory.js
│   │   ├── orders.js
│   │   ├── finance.js
│   │   ├── employees.js
│   │   └── ai.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── index.js
│   ├── seed.js
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Common.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Inventory.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Finance.jsx
│   │   │   ├── Employees.jsx
│   │   │   └── AI.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── .env.example
├── package.json
└── README.md
```

## 🎨 UI Design

- **Color Scheme:** Indigo primary color with grayscale neutrals
- **Responsive:** Responsive layout for desktop, tablet and mobile
- **Components:** Tailwind CSS utility-first styling
- **Charts:** Recharts for data visualizations

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS middleware for cross-origin requests
- Helmet.js for security headers
- Protected routes with authentication middleware
- Environment variable configuration

## 🚀 Production Deployment

### Environment Setup

1. Change `JWT_SECRET` to a strong random secret.
2. Update `MONGO_URI` to your production MongoDB instance.
3. Set `NODE_ENV=production`.
4. Configure `CLIENT_URL` to your frontend domain.
5. Add your production `GEMINI_API_KEY`.

### Backend Deployment

```bash
npm install --production
npm start
```

### Frontend Deployment

```bash
npm run build
```

Deploy the generated `client/dist` folder using a suitable frontend hosting platform.

## 📝 Environment Variables Reference

### Server (.env)

| Variable | Description | Example |
|---|---|---|
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/nexora |
| JWT_SECRET | JWT signing secret | your_secure_secret |
| GEMINI_API_KEY | Google Gemini API key | your_gemini_api_key |
| PORT | Backend server port | 5000 |
| NODE_ENV | Application environment | development |
| CLIENT_URL | Frontend URL | http://localhost:5173 |

### Client (.env)

| Variable | Description | Example |
|---|---|---|
| VITE_API_URL | Backend API URL | http://localhost:5000/api |

## 🐛 Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running.
- Check `MONGO_URI` in `.env`.
- For MongoDB Atlas, verify IP access and credentials.

### AI Assistant Not Working

- Verify `GEMINI_API_KEY` is configured.
- Check whether the API key is active.
- Check API quota and server logs.

### Port Already in Use

Stop the process using the required port or configure another available port.

## 📚 Learning Resources

- [MERN Stack Documentation](https://mern.io/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Google Gemini Documentation](https://ai.google.dev/gemini-api/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is distributed under the MIT License. Refer to the original repository's license and attribution notices.

## 📧 Support

For issues and questions, please open an issue on GitHub.

**Maintainer:** Harsha Tambat

**GitHub:** https://github.com/harsha-tambat-19

**Repository:** https://github.com/harsha-tambat-19/Vantora

---

