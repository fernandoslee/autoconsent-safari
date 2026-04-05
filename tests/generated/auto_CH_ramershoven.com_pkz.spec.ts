import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ramershoven.com_pkz', ['https://www.ramershoven.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
