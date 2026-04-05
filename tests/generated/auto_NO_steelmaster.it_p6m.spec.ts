import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_steelmaster.it_p6m', ['https://www.steelmaster.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
