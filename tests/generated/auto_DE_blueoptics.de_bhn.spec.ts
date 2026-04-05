import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blueoptics.de_bhn', ['https://www.blueoptics.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
