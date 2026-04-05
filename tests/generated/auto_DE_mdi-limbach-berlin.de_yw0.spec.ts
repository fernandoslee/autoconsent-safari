import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mdi-limbach-berlin.de_yw0', ['https://www.mdi-limbach-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
