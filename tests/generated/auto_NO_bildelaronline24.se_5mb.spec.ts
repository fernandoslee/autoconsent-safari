import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bildelaronline24.se_5mb', ['https://www.bildelaronline24.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
