import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aena.es_uwn', ['https://www.aena.es/es/pasajeros/pasajeros.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
