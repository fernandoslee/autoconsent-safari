import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_testingtime.com_3jf', ['https://www.testingtime.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
