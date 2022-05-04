const nomor = document.querySelector('.tnomor');

const vcari = document.querySelector('.cari');

vcari.addEventListener('click', () => {
    let kode = 'k';
    const tdkl = [
        '0038304276',
        '0022889835',
        '0032402083',
        '0037970147',
        '0022964665',
        '0038550088',
        '0024988709',
        '0069331807',
        '0072729210',
        '0067589403',
        '0056618997',
        '0066864362',
        '0075864452',
        '0063304859',
        '0069350910',
        '0077523755',
        '0062569159',
        '0062206985',
        '0068532540',
        '0062360728',
        '0067392520',
        '0052293709',
        '0072705477',
        '0078243458',
        '0075289744',
        '0064266781',
        '0078092536',
        '0064152701',
        '0067624312',
        '0075776103',
        '0065909027',
        '0041682165',
        '0066476191'
    ];
    for (i=0; i<tdkl.length; i++) {
        if (nomor.value==tdkl[i]) {
            kode = 't';
        }
    }
    const lulus = [
        '0035188863',
	'0042262028',
        '0034901008',
        '0027362120',
        '0046582651',
        '0039074172',
        '0038807476',
        '0003967762',
        '0032923025',
        '0032683423',
        '0034000466',
        '0033939975',
        '0025421752',
        '0046043178',
        '0030977585',
        '0016443516',
        '0024949942',
        '0039903421',
        '0033548974',
        '0007611551',
        '0034631749',
        '0031820078',
        '0044484552',
        '0031360558',
        '0033939353',
        '0032544118',
        '0033305464',
        '0042842126',
        '0033810570',
        '0038822171',
        '0044184515',
        '0022965837',
        '0034824613',
        '3023415752',
        '0048991449',
        '0039573416',
        '0032067930',
        '0040153250',
        '0037743318',
        '0006643430',
        '0029275818',
        '0034367048',
        '0034769938',
        '0034123452',
        '0034240947',
        '0029986773',
        '0033366530',
        '0030066507',
        '0037727784',
        '0049527678',
        '0022240248',
        '0030836797',
        '0031425922',
        '0021648455',
        '0039472728',
        '0035886174',
        '0043029170',
        '0039933978',
        '0022620876',
        '0033189682',
        '0055131061',
        '0032188697',
        '0029870901',
        '0032671222',
        '0039134504',
        '0038654271',
        '0018103978',
        '0037042283',
        '0065702678',
        '0076633314',
        '0066415186',
        '0077181102',
        '0073359866',
        '0069377786',
        '0063614700',
        '0063356749',
        '0074928440',
        '0076502271',
        '0069405830',
        '0066568306',
        '0062773463',
        '0064492274',
        '0063559210',
        '0063732570'
    ];
    if (kode == 'k') {
        for (i=0; i<lulus.length; i++) {
            if (nomor.value==lulus[i]) {
                kode = 'l';
            }
        }
    }
    switch (kode) {
        case 'l':
            let pg = nomor.value+".jpg";
            window.location.replace(pg);
            break;
        case 't':
            window.location.replace("tidak.html");
            break;
        default:
            return;
    }
});
