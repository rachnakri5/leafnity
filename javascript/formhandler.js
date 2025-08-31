document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxhDmaGfvpaQDs3SCMz95wb6prtJu_h13QU74nksuunFnJDkSUO64P604tW58Kmlhi1/exec';

    function handleFormSubmission(formId, submitBtnId, popupId) {
        const form = document.getElementById(formId);
        const submitBtn = document.getElementById(submitBtnId);
        const formPopup = document.getElementById(popupId);

        if (!form || !submitBtn || !formPopup) {
            console.error('One or more form elements not found.');
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            fetch(scriptURL, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Reset the form fields instead of hiding the form
                    form.reset();

                    // Show the success message popup
                    formPopup.classList.remove('opacity-0');
                    formPopup.classList.add('opacity-100');

                    // Make the success message disappear after 5 seconds
                    setTimeout(() => {
                        formPopup.classList.remove('opacity-100');
                        formPopup.classList.add('opacity-0');
                    }, 5000);

                } else {
                    alert('An error occurred. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error submitting the form.');
            })
            .finally(() => {
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            });
        });
    }

    // Initialize all forms with the same handler
    handleFormSubmission('contact-form', 'submitBtn', 'success-message');
    handleFormSubmission('quoteForm', 'submitBtn', 'successMessage');
    handleFormSubmission('contactForm', 'submitBtn', 'formPopup');
});