/* Form validation */
function validateForm() {
/* Array of form values */
    const formValues = [
        { id: 'contact-name', name: 'Name', message: 'Name must be filled out' },
        { id: 'contact-email', name: 'Email', message: 'Email must be filled out' },
        { id: 'contact-message', name: 'Message', message: 'Message must be filled out' }
    ]

    /* If there is no input in the id, display the relevant error message */
    for (let id of formValues) {
        const input = document.getElementById(id.id);
        if (!input || input.value.trim() === "") {
            showCustomAlert(id.message);
            input.focus();
            return false;
        }
    }
}