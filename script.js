const nomor = document.querySelector('.tnomor');

const vcari = document.querySelector('.cari');

vcari.addEventListener('click', () => {

            let pg = nomor.value+".jpg";
            window.location.replace(pg);
            break;

});
