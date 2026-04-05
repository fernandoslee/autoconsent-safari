import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reifen-stiebling.de_uln', ['https://www.reifen-stiebling.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
