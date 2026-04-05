import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_minhalsobutik.se_fw6', ['https://www.minhalsobutik.se/sv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
