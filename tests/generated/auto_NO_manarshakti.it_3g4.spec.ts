import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_manarshakti.it_3g4', ['https://www.manarshakti.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
