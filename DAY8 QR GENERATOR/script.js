let qrBoxField = document.querySelector('.qrBox');
let qrImageField = document.querySelector('.qrImage');
let qrTextField = document.querySelector('.qrText');
let qrButton = document.querySelector('.GenerateQrButton');

function generateQr() {


    if (qrTextField.value.length > 0) {
        qrImageField.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTextField.value

        qrBoxField.classList.add("show-img");
    }
    else {
        qrTextField.classList.add('error');
        alert("Please enter text or URL before generating QR code");

        setTimeout(() => {
            qrTextField.classList.remove('error');
        }, 1000)
        return;
    }


}
qrButton.addEventListener("click", generateQr);