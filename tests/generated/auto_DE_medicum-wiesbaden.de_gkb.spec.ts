import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medicum-wiesbaden.de_gkb', ['https://www.medicum-wiesbaden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
