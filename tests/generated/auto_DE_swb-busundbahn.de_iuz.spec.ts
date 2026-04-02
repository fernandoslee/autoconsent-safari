import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_swb-busundbahn.de_iuz', ['https://www.swb-busundbahn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
