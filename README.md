
# 🏢 Employee Management System (EMS)

A comprehensive, full-stack Employee Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application streamlines HR operations with role-based access control, allowing administrators to manage employees, departments, leaves, salaries, and attendance efficiently.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://ems6-frontend.onrender.com)
[![Backend API](https://img.shields.io/badge/api-live-blue)](https://ems6-backend.onrender.com)

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
  - [Environment Variables](#environment-variables)
- [Deployment](#-deployment)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based authentication** with secure token management
- **Role-based access control** (Admin & Employee roles)
- Protected routes for authenticated users only
- Password change functionality

### 👥 Employee Management
- Add, edit, view, and manage employee profiles
- Upload employee profile images
- Search and filter employees by name or department
- View detailed employee information including:
  - Personal details (Name, DOB, Gender, Marital Status)
  - Contact information
  - Department assignment
  - Salary information
  - Employee ID generation

### 🏛️ Department Management
- Create and manage departments
- Edit department information
- Delete departments (with validation)
- Assign employees to departments
- View department-wise employee distribution

### 🌴 Leave Management
- **Employee Features:**
  - Apply for leave with date range and reason
  - View leave history and status
  - Track pending/approved/rejected leaves
- **Admin Features:**
  - Approve or reject leave requests
  - View all leave requests across the organization
  - Filter leaves by employee or status
  - Calculate leave duration automatically

### 💰 Salary Management
- Record employee salary details including:
  - Basic salary
  - Allowances
  - Deductions
  - Net salary calculation
  - Payment date tracking
- View salary history for each employee
- Filter salary records by employee ID

### 📊 Attendance Management
- Mark daily attendance (Present/Absent)
- View attendance records with date filters
- Generate attendance reports
- Department-wise attendance tracking
- Automatic attendance initialization for new employees

### 📈 Dashboard
- **Admin Dashboard:**
  - Total employees, departments, salaries overview
  - Leave statistics (pending, approved, rejected)
  - Quick navigation to all modules
- **Employee Dashboard:**
  - Personal information summary
  - Quick access to leave application
  - View salary details
  - Change password settings

### 🎨 UI/UX Features
- Responsive design for all screen sizes
- Clean and modern interface with Tailwind CSS
- Interactive data tables with search and pagination
- Toast notifications for user actions
- Loading states and error handling

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **React Data Table Component** - Interactive data tables
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Deployment
- **Render** - Cloud hosting platform (both frontend and backend)
- **MongoDB Atlas** - Cloud database service

---

## 📁 Project Structure

```
EMS6/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── attendance/  # Attendance components
│   │   │   ├── dashboard/   # Dashboard components
│   │   │   ├── department/  # Department management
│   │   │   ├── employee/    # Employee management
│   │   │   ├── EmployeeDashboard/ # Employee-specific views
│   │   │   ├── leave/       # Leave management
│   │   │   └── salary/      # Salary management
│   │   ├── context/         # React Context API (Auth)
│   │   ├── pages/           # Page components
│   │   ├── utils/           # Helper functions & utilities
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                   # Node.js backend application
│   ├── controllers/         # Request handlers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware (auth, etc.)
│   ├── db/                  # Database connection
│   ├── public/uploads/      # Uploaded files
│   ├── index.js             # Server entry point
│   └── package.json
│
├── DEPLOYMENT.md            # Deployment guide
├── RENDER_SETUP.md          # Render-specific setup
├── render.yaml              # Render blueprint configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager
- **Git**

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ermaheshgiri/EMS6.git
   cd EMS6
   ```

2. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

#### Backend (server/.env)
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employee_management

JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

#### Frontend (Optional)
Create a `.env` file in the `frontend` directory for production API URL:
```env
VITE_API_URL=http://localhost:5000
```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Access the application:**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

4. **Default Admin Credentials:**
   ```
   Email: admin@example.com
   Password: admin123
   ```
   *(Create these credentials using the userSeed.js script)*

---

## 🌐 Deployment

This project is configured for deployment on **Render** using a Blueprint (render.yaml).

### Quick Deploy to Render

1. **Fork this repository** to your GitHub account

2. **Sign up/Login to Render:** [https://render.com](https://render.com)

3. **Create a new Blueprint:**
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`

4. **Set Environment Variables:**
   - `JWT_SECRET`: Your secret key for JWT tokens
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `VITE_API_URL`: Your backend service URL (provided by Render)

5. **Deploy:**
   - Render will automatically build and deploy both frontend and backend
   - Access your live application via the provided URLs

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md) and [RENDER_SETUP.md](./RENDER_SETUP.md).

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token

### Employees
- `GET /api/employee` - Get all employees
- `GET /api/employee/:id` - Get employee by ID
- `POST /api/employee/add` - Add new employee
- `PUT /api/employee/:id` - Update employee
- `GET /api/employee/department/:id` - Get employees by department

### Departments
- `GET /api/department` - Get all departments
- `GET /api/department/:id` - Get department by ID
- `POST /api/department/add` - Add new department
- `PUT /api/department/:id` - Update department
- `DELETE /api/department/:id` - Delete department

### Leave
- `GET /api/leave` - Get all leaves (admin)
- `GET /api/leave/:id/:role` - Get leaves by employee
- `GET /api/leave/detail/:id` - Get leave details
- `POST /api/leave/add` - Apply for leave
- `PUT /api/leave/:id` - Update leave status

### Salary
- `GET /api/salary/:id/:role` - Get salary records
- `POST /api/salary/add` - Add salary record

### Attendance
- `GET /api/attendance` - Get all attendance records
- `GET /api/attendance/report` - Get attendance report
- `PUT /api/attendance/update/:employeeId` - Mark attendance

### Dashboard
- `GET /api/dashboard/summary` - Get dashboard statistics

### Settings
- `PUT /api/setting/change-password` - Change user password

---

## 📸 Screenshots

### Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

### Employee Management
![Employee List](https://via.placeholder.com/800x400?text=Employee+List)

### Leave Management
![Leave Management](https://via.placeholder.com/800x400?text=Leave+Management)

### Attendance Tracking
![Attendance](https://via.placeholder.com/800x400?text=Attendance+Tracking)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mahesh Giri**
- GitHub: [@ermaheshgiri](https://github.com/ermaheshgiri)

---

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Built with ❤️ using the MERN stack

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/ermaheshgiri/EMS6/issues)
- Star ⭐ this repository if you find it helpful!

---

**Made with ❤️ by Mahesh Giri**

