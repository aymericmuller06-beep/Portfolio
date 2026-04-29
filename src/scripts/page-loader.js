(function() {
  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')
  if (theme === 'dark') {
    document.getElementById('page-loader').style.background = '#020e0f'
  }
})()