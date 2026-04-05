import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bauen.bayern.de_22p', ['https://www.bauen.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
