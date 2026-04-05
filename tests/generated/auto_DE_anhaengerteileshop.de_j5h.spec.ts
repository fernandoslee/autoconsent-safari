import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anhaengerteileshop.de_j5h', ['https://anhaengerteileshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
