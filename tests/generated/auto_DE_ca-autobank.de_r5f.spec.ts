import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ca-autobank.de_r5f', ['https://www.ca-autobank.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
