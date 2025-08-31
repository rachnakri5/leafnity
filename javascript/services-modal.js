// services-Modal.js
document.addEventListener('DOMContentLoaded', () => {

    const servicesModal = document.getElementById('services-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const openModalBtn = document.getElementById('open-modal-btn'); // Assuming you have a button or link to open the modal

    if (servicesModal && closeModalBtn && openModalBtn) {
        
        // Function to show the modal
        const openModal = () => {
            servicesModal.style.display = 'flex'; // Use flex to center the content
        };

        // Function to hide the modal
        const closeModal = () => {
            servicesModal.style.display = 'none';
        };

        // Add event listeners
        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        servicesModal.addEventListener('click', (e) => {
            // Close the modal if the user clicks on the overlay (the area outside the modal content)
            if (e.target === servicesModal) {
                closeModal();
            }
        });
    }
});