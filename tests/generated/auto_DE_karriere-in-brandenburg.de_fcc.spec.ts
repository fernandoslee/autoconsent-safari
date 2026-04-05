import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_karriere-in-brandenburg.de_fcc', ['https://karriere-in-brandenburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
