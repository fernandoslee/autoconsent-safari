import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_behrenswatches.com_zh4', ['http://www.behrenswatches.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
