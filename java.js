window.onload = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var qrImage = document.getElementById('qr-image');
    var downloadButton = document.getElementById('download-link');
    if (isMobile) {

        document.getElementById('platform').textContent = 'Estás visitando desde un dispositivo móvil.';
        qrImage.style.display = 'none';
        downloadButton.style.display = 'inline-block';
    } else {

        document.getElementById('platform').textContent = 'Estás visitando desde un navegador web.';
        qrImage.style.display = 'inline-block';
        downloadButton.style.display = 'none';
    }
};
