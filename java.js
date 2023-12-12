window.onload = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var qrImage = document.getElementById('qr-image');
    var downloadButton = document.getElementById('download-button');
    var platformInfo = document.getElementById('platform');

    if (isMobile) {
        // Si es un dispositivo móvil, mostrar el botón y ocultar la imagen
        qrImage.style.display = 'none';
        downloadButton.style.display = 'inline-block';
        platformInfo.textContent = 'Estás visitando desde un dispositivo móvil.';
    } else {
        // Si es una computadora, ocultar el botón y mostrar la imagen
        qrImage.style.display = 'inline-block';
        downloadButton.style.display = 'none';
        platformInfo.textContent = 'Estás visitando desde un navegador web.';
    }
};
