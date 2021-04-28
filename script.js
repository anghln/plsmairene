const nomor = document.querySelector('.tnomor');

const vcari = document.querySelector('.cari');

vcari.addEventListener('click', () => {
    switch (nomor.value) {
        case '12345':
            window.location.replace("https://facebook.com");
            break;
        case '2':
            let pg = nomor.value+".html";
            window.location.replace(pg);
            break;
        case '1111':
            window.location.replace("https://google.com");
            break;
        case Number(nomor.value)>10000:
            window.location.replace("tidak.html");
        default:
            return;
    };
});