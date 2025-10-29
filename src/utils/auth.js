// Authentication utility functions using localStorage
const SESSION_KEY = 'ticketapp_session';

export const authService = {
  // Check if user is authenticated
  isAuthenticated: () => {
    const session = localStorage.getItem(SESSION_KEY);
    return !!session;
  },

  // Get current user from session
  getCurrentUser: () => {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },

  // Login user 
  login: (email, password) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const user = {
      id: Date.now(),
      email,
      name: email.split('@')[0],
      token: 'mock-jwt-token-' + Date.now()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
  },

  // Register user 
  signup: (name, email, password, confirmPassword) => {
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const user = {
      id: Date.now(),
      email,
      name,
      token: 'mock-jwt-token-' + Date.now()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  }
};

