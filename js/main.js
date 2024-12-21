document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 4;
    let currentPage = 1;
    const galleryItems = document.querySelectorAll('.gallery-item');
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

    function showPage(page) {
        galleryItems.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });
        document.getElementById('page-info').textContent = `Page ${page} of ${totalPages}`;
    }

    function updatePagination() {
        document.getElementById('prev').disabled = currentPage === 1;
        document.getElementById('next').disabled = currentPage === totalPages;
    }

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePagination();
        }
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePagination();
        }
    });


    showPage(currentPage);
    updatePagination();


    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementsByClassName('close')[0];

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});