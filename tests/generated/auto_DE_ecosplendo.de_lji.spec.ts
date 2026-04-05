import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ecosplendo.de_lji', ['https://www.ecosplendo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
