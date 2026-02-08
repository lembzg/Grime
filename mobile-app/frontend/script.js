// Add this function to update user info
function updateUserInfo() {
    try {
        // Get user data from localStorage (where modules.js stores it)
        const userData = localStorage.getItem('user');
        
        if (userData) {
            const user = JSON.parse(userData);
            
            // Update avatar initials
            const avatar = document.querySelector('.avatar');
            const avatarSmall = document.querySelector('.avatar-small');
            
            if (avatar && user.name) {
                avatar.textContent = user.name.charAt(0).toUpperCase();
            }
            if (avatarSmall && user.name) {
                avatarSmall.textContent = user.name.charAt(0).toUpperCase();
            }
            
            // Update user name and email
            const userName = document.querySelector('.user-name');
            const userEmail = document.querySelector('.user-email');
            
            if (userName) userName.textContent = user.name || 'User';
            if (userEmail) userEmail.textContent = user.email || 'No email';
            
            console.log('User info updated:', user.name, user.email);
        } else {
            console.log('No user data found in localStorage');
        }
    } catch (error) {
        console.error('Error updating user info:', error);
    }
}

// Update the logout function to clear data properly
function logout() {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login
    window.location.href = 'login-register.html';
}

// Call updateUserInfo when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateUserInfo();
});

// Your existing functions (keep these)
function toggleAvatarMenu() {
  const menu = document.getElementById('avatarMenu');
  if (menu) {
    if (menu.classList.contains('active')) {
      // Start fade out
      menu.classList.remove('active');
      menu.classList.add('fading-out');
      
      // Remove fading-out class after animation completes
      setTimeout(() => {
        menu.classList.remove('fading-out');
      }, 200);
    } else {
      // Remove any leftover classes
      menu.classList.remove('fading-out');
      // Start fade in
      menu.classList.add('active');
    }
  }
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('avatarMenu');
  const avatarBtn = document.querySelector('.avatar-btn');
  
  if (menu && menu.classList.contains('active')) {
    if (!menu.contains(event.target) && !avatarBtn.contains(event.target)) {
      // Start fade out when clicking outside
      menu.classList.remove('active');
      menu.classList.add('fading-out');
      
      setTimeout(() => {
        menu.classList.remove('fading-out');
      }, 200);
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const menu = document.getElementById('avatarMenu');
    if (menu && menu.classList.contains('active')) {
      menu.classList.remove('active');
      menu.classList.add('fading-out');
      
      setTimeout(() => {
        menu.classList.remove('fading-out');
      }, 200);
    }
  }
});