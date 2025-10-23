(function($) {
    document.getElementById('downloadFile399').onclick = function() {
        const EDET399 = document.createElement('a');
        EDET399.href = 'assets/Ashleigh_Boulter_EDET399.pdf';  
        EDET399.download = 'Ashleigh_Boulter_EDET399.pdf';
        document.body.appendChild(EDET399);
        EDET399.click();
        document.body.removeChild(EDET399);

        showCustomAlert("Your download will start shortly.");
    };
})(jQuery);