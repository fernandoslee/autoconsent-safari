import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_horizont-europa.de_pv5', ['https://www.horizont-europa.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
