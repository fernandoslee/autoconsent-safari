import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_michelayoga.com_v5x', ['https://www.michelayoga.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
