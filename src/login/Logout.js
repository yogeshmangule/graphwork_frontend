// En 'Logout.js'
import axios from 'axios';

// Function to handle logout
const handleLogout = (history) => {
  // Reset authentication-related data
  localStorage.removeItem('userId');
  localStorage.removeItem('userRol');
  localStorage.removeItem('username');
  localStorage.removeItem('isAutenticado');

  // Redirect to the login page
  history('/');
  window.location.reload();
};

export { handleLogout };
