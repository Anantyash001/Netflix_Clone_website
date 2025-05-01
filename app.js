// Scroll function
function scrollLeft(rowId) {
    const row = document.getElementById(rowId);
    row.scrollBy({ left: -300, behavior: 'smooth' });
  }
  function searchMovies() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      const altText = thumbnail.querySelector('img').alt.toLowerCase();
      if (altText.includes(input)) {
        thumbnail.style.display = 'block';
      } else {
        thumbnail.style.display = 'none';
      }
    });
  }
  

  function scrollRight(rowId) {
    const row = document.getElementById(rowId);
    row.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  // Modal logic
  const modal = document.getElementById('movieModal');
  const modalImg = modal.querySelector('.modal-img');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  
  function openModal(imageSrc, title = 'Movie Title', description = 'Sample description') {
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    modal.style.display = 'none';
  }
  
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  