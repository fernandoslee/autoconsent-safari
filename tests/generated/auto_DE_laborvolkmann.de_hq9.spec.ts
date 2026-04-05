import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_laborvolkmann.de_hq9', ['https://laborvolkmann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
