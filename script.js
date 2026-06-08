const homeSection = document.getElementById('home');

homeSection.addEventListener('mousemove', (e) => {
    const rect = homeSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    homeSection.style.background = `radial-gradient(circle at ${x}% ${y}%, #764ba2, #667eea)`;
});
