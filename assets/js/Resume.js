    /* Download resume function */
    
    document.getElementById('downloadResume').onclick = function() {
        const link = document.createElement('a');
        /*Establish and download resume link */
        link.href = 'assets/Ashleigh_Boulter_Resume.pdf'; 
        link.download = 'Ashleigh_Boulter_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        /* Display custom pop-up*/
        showCustomAlert("Your download will start shortly.");
    };
