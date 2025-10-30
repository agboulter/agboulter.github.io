/* Download Classroom management strateegies */

document.getElementById('downloadFile200').addEventListener('click', function() {
    const EDET200 = document.createElement('a');
    /* Establish and download file */
    EDET200.href = 'assets/Ashleigh_Boulter_EDET200.pdf';
    EDET200.download = 'Ashleigh_Boulter_EDET200.pdf';
    document.body.appendChild(EDET200);
    EDET200.click();
    document.body.removeChild(EDET200);

    /* Display custom pop-up */

    showCustomAlert("Your download will start shortly.");
});
