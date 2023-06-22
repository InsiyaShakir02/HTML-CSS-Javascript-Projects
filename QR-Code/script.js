// JavaScript source code
// Get the QR code container element
const container = document.getElementById("qrcode");

// Generate the QR code
const qrCode = new QRCode(container, {
    text: "https://www.insiyashakir.tech/",  // Replace with your desired URL or text
    width: 128,
    height: 128,

});
