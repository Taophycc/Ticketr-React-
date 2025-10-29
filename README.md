# Ticketr - React Implementation

A comprehensive ticket management web application built with React, Vite, and Tailwind CSS.

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **LocalStorage** - Session and data persistence

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Installation Steps

1. Navigate to the React project directory:
```bash
cd react-tickets
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🚀 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
react-tickets/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Footer.jsx
│   │   ├── Toast.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/            # Page components
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   └── Tickets.jsx
│   ├── utils/            # Utility functions
│   │   ├── auth.js       # Authentication logic
│   │   └── tickets.js    # Ticket CRUD operations
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles with Tailwind
├── public/               # Static assets
├── index.html            # HTML template
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 UI Components & Pages

### 1. Landing Page (`/`)
- Hero section with wavy SVG background
- Decorative circles and feature boxes
- Call-to-action buttons for Login and Signup
- Responsive layout with max-width 1440px

### 2. Authentication
- **Login** (`/auth/login`) - Email and password authentication
- **Signup** (`/auth/signup`) - User registration with validation
- Form validation with inline error messages
- Toast notifications for success/error feedback

### 3. Dashboard (`/dashboard`)
- Protected route (requires authentication)
- Statistics cards showing:
  - Total tickets
  - Open tickets
  - In Progress tickets
  - Resolved tickets
- Quick action buttons
- Logout functionality

### 4. Ticket Management (`/tickets`)
- Protected route (requires authentication)
- Full CRUD operations:
  - **Create**: Modal form to add new tickets
  - **Read**: Grid view of all tickets with status badges
  - **Update**: Modal form to edit existing tickets
  - **Delete**: Confirmation modal before deletion
- Real-time form validation
- Status color coding:
  - Open: Green (`#10B981`)
  - In Progress: Amber (`#F59E0B`)
  - Closed: Gray (`#6B7280`)

## 🔐 Authentication & Security

### Session Management
- Uses `localStorage` with key: `ticketapp_session`
- Token-based authentication simulation
- Protected routes redirect to login if not authenticated

### Test Credentials
**Any valid email and password combination works:**
- Email: Must contain `@` symbol
- Password: Minimum 6 characters

**Example:**
```
Email: demo@example.com
Password: password123
```

## ✅ Form Validation

### Login/Signup Validation
- Email format validation
- Password length (minimum 6 characters)
- Password confirmation matching
- Real-time inline error messages

### Ticket Validation
- **Title**: Required field
- **Status**: Required, must be one of: `open`, `in_progress`, `closed`
- **Description**: Optional
- **Priority**: Optional (low, medium, high)

## 🎨 Design System

### Colors
- Primary: `#4F46E5` (Indigo)
- Status Open: `#10B981` (Green)
- Status In Progress: `#F59E0B` (Amber)
- Status Closed: `#6B7280` (Gray)

### Layout
- Max container width: `1440px`
- Centered on large screens
- Fully responsive grid system
- Mobile-first approach

### Accessibility Features
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance
- Error announcements with `role="alert"`

## 💾 Data Storage

### LocalStorage Keys
- `ticketapp_session` - User session data
- `ticketapp_tickets` - Ticket data array

### Sample Data
The app initializes with 3 sample tickets:
1. "Fix login bug" (Open, High priority)
2. "Update dashboard UI" (In Progress, Medium priority)
3. "Write documentation" (Closed, Low priority)

## 🌐 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Stacked navigation
- Touch-friendly buttons
- Collapsible sections

### Tablet (768px - 1024px)
- Two-column grid for tickets
- Horizontal navigation
- Optimized spacing

### Desktop (> 1024px)
- Three-column grid for tickets
- Four-column stats cards
- Full navigation bar
- Maximum width constraint (1440px)

## 🐛 Error Handling

### Types of Errors Handled
1. **Form Validation Errors**: Inline messages below fields
2. **Authentication Errors**: Toast notifications
3. **Network/API Errors**: Toast notifications with retry guidance
4. **Unauthorized Access**: Automatic redirect to login

### Error Messages
- Clear and descriptive
- User-friendly language
- Actionable guidance provided

## 📝 State Management

### Component State
- Local state with React hooks (`useState`, `useEffect`)
- Form state management
- Modal visibility state
- Toast notification state

### Data Flow
1. User actions trigger state updates
2. State updates modify localStorage
3. UI re-renders with updated data
4. Success/error feedback via toasts

## 🔄 Known Issues & Limitations

- Authentication is simulated (no backend)
- Data persists only in browser localStorage
- No real-time collaboration features
- No user permission system
- Limited to single-user experience

## 🚀 Future Enhancements

- Backend integration with REST API
- Real-time updates with WebSockets
- User roles and permissions
- File attachments for tickets
- Comment system
- Email notifications
- Advanced filtering and search
- Data export functionality

## 📄 License

This is a demonstration project for educational purposes.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

