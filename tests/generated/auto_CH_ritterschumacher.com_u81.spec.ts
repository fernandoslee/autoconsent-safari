import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ritterschumacher.com_u81', ['https://ritterschumacher.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
