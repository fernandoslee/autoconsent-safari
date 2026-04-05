import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wasserundsteine.de_ch8', ['https://www.wasserundsteine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
