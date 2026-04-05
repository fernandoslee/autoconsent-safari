import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_konsumentverket.se_3vn', ['https://www.konsumentverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
