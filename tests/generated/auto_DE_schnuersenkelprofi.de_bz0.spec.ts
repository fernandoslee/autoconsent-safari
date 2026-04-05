import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schnuersenkelprofi.de_bz0', ['https://www.schnuersenkelprofi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
