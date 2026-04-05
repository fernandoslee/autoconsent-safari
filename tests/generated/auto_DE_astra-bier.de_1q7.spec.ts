import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_astra-bier.de_1q7', ['https://www.astra-bier.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
