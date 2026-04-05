import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_busse-yachtshop.de_54e', ['https://busse-yachtshop.de/s/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
