import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saanenbank.ch_d55', ['https://www.saanenbank.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
