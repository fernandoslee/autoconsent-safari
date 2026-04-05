import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lansstyrelsen.se_qig', ['https://www.lansstyrelsen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
