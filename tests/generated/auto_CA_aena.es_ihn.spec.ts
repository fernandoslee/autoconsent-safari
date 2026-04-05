import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_aena.es_ihn', ['https://www.aena.es/es/pasajeros/pasajeros.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
