import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_legitimation.socialstyrelsen.se_bui', ['https://legitimation.socialstyrelsen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
