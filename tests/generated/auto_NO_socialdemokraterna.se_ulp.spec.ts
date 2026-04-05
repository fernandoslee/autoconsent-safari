import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_socialdemokraterna.se_ulp', ['https://www.socialdemokraterna.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
