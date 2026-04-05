import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baufi-nord.de_nhm', ['https://www.baufi-nord.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
