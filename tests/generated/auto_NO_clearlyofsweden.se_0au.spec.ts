import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_clearlyofsweden.se_0au', ['https://www.clearlyofsweden.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
