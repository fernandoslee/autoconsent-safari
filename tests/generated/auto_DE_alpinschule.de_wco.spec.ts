import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpinschule.de_wco', ['https://www.alpinschule.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
