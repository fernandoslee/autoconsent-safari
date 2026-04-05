import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_50pluscenter.at_kzc', ['https://50pluscenter.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
