import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klettshop24.de_628', ['https://www.klettshop24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
