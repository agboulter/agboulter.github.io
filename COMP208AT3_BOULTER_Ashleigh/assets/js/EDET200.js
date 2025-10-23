(function($) {
    document.getElementById('downloadFile200').onclick = function() {
        const EDET200 = document.createElement('a');
        EDET200.href = 'assets/Ashleigh_Boulter_EDET200.pdf';  
        EDET200.download = 'Ashleigh_Boulter_EDET200.pdf';
        document.body.appendChild(EDET200);
        EDET200.click();
        document.body.removeChild(EDET200);

        showCustomAlert("Your download will start shortly.");
    };
})(jQuery);