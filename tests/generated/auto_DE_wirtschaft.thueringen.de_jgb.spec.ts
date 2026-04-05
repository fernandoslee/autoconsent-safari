import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wirtschaft.thueringen.de_jgb', ['https://wirtschaft.thueringen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
