const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.TextoConAnimacion');
  
      if (entry.isIntersecting) {
        square.classList.add('AnimacionTexto');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('AnimacionTexto');
    });
  });
  
  observer.observe(document.querySelector('.SeccionLibroMes'));