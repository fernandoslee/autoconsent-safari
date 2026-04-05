import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scoreexchange.com_yzz', ['https://www.scoreexchange.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
