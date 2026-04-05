import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_werksviertel-mitte.de_9vg', ['https://www.werksviertel-mitte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
