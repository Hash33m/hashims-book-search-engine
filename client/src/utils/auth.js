import decode from 'jwt-decode';

class AuthService {
  // Get user data from the token
  getProfile() {
    const token = this.getToken();
    if (token) {
      return decode(token);
    }
    return null;
  }

  // Check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true;
    }
  }

  // Get the token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save the user token to localStorage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    // Refresh the page to reset the application state
    window.location.assign('/');
  }

  // Clear user token from localStorage
  logout() {
    localStorage.removeItem('id_token');
    // Refresh the page to reset the application state
    window.location.assign('/');
  }
}

export default new AuthService();

