import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stortorvetsenter.no_b6m', ['https://www.stortorvetsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
