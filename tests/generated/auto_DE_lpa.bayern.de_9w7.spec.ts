import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lpa.bayern.de_9w7', ['https://www.lpa.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
