import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zeugnisfairness.de_o40', ['https://www.zeugnisfairness.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
