 
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  
  
  if (savedTheme === 'dark') {
    root.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
  
 
  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });