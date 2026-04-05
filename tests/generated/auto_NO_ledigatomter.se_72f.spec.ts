import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ledigatomter.se_72f', ['https://www.ledigatomter.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
