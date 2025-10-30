    /* Download unit plan */
    
    document.getElementById('downloadFile299').onclick = function() {
        const EDET299 = document.createElement('a');
        /* Establish and download unit plan */
        EDET299.href = 'assets/Ashleigh_Boulter_EDET299.pdf';  
        EDET299.download = 'Ashleigh_Boulter_EDET299.pdf';
        document.body.appendChild(EDET299);
        EDET299.click();
        document.body.removeChild(EDET299);

        /* Display custom pop-up */

        showCustomAlert("Your download will start shortly.");
    };