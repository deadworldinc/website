window.onload = function() {
    const user = 'deadworldinc';
    const service = 'test';

    let qrCodeContainer = document.getElementById("qrcode");
    let spanSecret = document.getElementById("spanSecret");
    let spanCode = document.getElementById("spanCode");
    let spanTime = document.getElementById("spanTime");
    let progressTime = document.getElementById("progressTime");

    function generateQRCode() {
        const secret = otplib.authenticator.generateSecret();
        const token = otplib.authenticator.generate(secret);
        console.log(secret);
        console.log(token);
        const otpauth = otplib.authenticator.keyuri(user, service, secret);
        let qrcode = new QRCode(qrCodeContainer, {
            text: otpauth,
            width: 128,
            height: 128,
            colorDark : "#ffffff",
            colorLight : "#1e1e1e",
            correctLevel : QRCode.CorrectLevel.H
        });
        spanSecret.textContent = secret;
        spanCode.textContent = token;
    }
    generateQRCode();
    setInterval(function(){
        spanTime.textContent = 30 - otplib.authenticator.timeUsed();
        progressTime.value = 30 - otplib.authenticator.timeUsed();
        if(otplib.authenticator.timeUsed() == 0) {
            qrCodeContainer.innerHTML = ``;
            generateQRCode();
        }
    }, 1000)
}