 let bricks = document.getElementById("bricks");
        let shadows = document.getElementById("shadows");
        let char = document.getElementById("char");
        let mainTitle = document.getElementById("mainTitle");

        window.addEventListener("scroll", function (){
            let scrollY = window.scrollY;
           
            bricks.style.transform = `translateY(${scrollY * 2}px)`;
            shadows.style.transform = `translateY(${scrollY * 1}px)`;
            char.style.transform = `translateY(${scrollY * 0.1}px)`;
            mainTitle.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.4}px)`;
        });

       
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Main DOMContentLoaded script is running!');
           
        });

function bottomFunction() {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
}

document.addEventListener('DOMContentLoaded', function() {
     console.log('JavaScript is running!');
    const filterButtons = document.querySelectorAll('.filter-btn'); // 
    const galleryItems = document.querySelectorAll('.gallery-item');

     console.log('Number of filter buttons found:', filterButtons.length);
    console.log('Number of gallery items found:', galleryItems.length);

    function filterGallery(filterCategory) {
        console.log('Attempting to filter by:', filterCategory);
        galleryItems.forEach(item => {
            if (filterCategory === 'all' || item.classList.contains(filterCategory)) {
                item.classList.remove('hide'); 
            } else {
                item.classList.add('hide'); 
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
             console.log('Button clicked:', this.textContent, 'Data-filter:', this.dataset.filter); 
            

            const filterCategory = this.dataset.filter;
            filterGallery(filterCategory);
        });
    });

    filterGallery('all');

        const popupImageContainer = document.querySelector('.popup-image');
            const popupImage = document.querySelector('.popup-image img');
            const closePopupSpan = document.querySelector('.popup-image span');

            const galleryItemImages = document.querySelectorAll('.gallery-item img');

            galleryItemImages.forEach(img => {
                img.addEventListener('click', function() {
                    popupImage.src = this.src;
                    popupImageContainer.style.display = 'flex';
                });
            });

            if (closePopupSpan) {
                closePopupSpan.addEventListener('click', function() {
                    popupImageContainer.style.display = 'none';
                });
            }

            
            if (popupImageContainer) {
                popupImageContainer.addEventListener('click', function(event) {
                    if (event.target === popupImageContainer) { // 
                        popupImageContainer.style.display = 'none';
                    }
                });
            }
});