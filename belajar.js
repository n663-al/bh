// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Menangkap input password
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
  
  
    if (passwordInput.value === '') {
      // Mencegah form untuk submit jika password kosong
      event.preventDefault();
  
      // Menampilkan pesan error
      errorMessage.style.display = 'block';
    } else {
      // Jika password tidak kosong, pastikan pesan error tidak muncul
      errorMessage.style.display = 'none';
    }
  });
  