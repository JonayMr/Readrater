const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.TextoConAnimacion');
  
      if (entry.isIntersecting) {
        square.classList.add('AnimacionTexto');
        return; // Añade clase de animación
      }
  
      // Elimina la clase de animación
      square.classList.remove('AnimacionTexto');
    });
  });
  
  observer.observe(document.querySelector('.SeccionLibroMes'));