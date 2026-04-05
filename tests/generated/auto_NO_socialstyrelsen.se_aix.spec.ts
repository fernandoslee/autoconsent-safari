import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_socialstyrelsen.se_aix', ['https://www.socialstyrelsen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
