import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_xxl-automotive.de_yva', ['https://www.xxl-automotive.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
