import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schweitzer-online.de_1ge', ['https://www.schweitzer-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
