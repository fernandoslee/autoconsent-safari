import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_regionorebrolan.se_olg', ['https://www.regionorebrolan.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
