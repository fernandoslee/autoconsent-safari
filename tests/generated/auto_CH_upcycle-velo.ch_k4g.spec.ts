import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_upcycle-velo.ch_k4g', ['https://www.upcycle-velo.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
