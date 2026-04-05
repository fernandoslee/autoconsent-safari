import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_handyersatzteil.ch_lv2', ['https://www.handyersatzteil.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
