import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_orh.bayern.de_izw', ['https://www.orh.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
