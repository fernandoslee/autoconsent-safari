import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hafermannreisen.de_j9o', ['https://www.hafermannreisen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
