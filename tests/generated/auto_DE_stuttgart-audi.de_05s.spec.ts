import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stuttgart-audi.de_05s', ['https://www.stuttgart-audi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
