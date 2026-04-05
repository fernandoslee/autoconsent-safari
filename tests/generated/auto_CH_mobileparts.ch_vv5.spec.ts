import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mobileparts.ch_vv5', ['https://www.mobileparts.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
