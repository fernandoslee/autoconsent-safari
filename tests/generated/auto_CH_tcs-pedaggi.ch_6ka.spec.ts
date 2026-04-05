import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tcs-pedaggi.ch_6ka', ['https://www.tcs-pedaggi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
