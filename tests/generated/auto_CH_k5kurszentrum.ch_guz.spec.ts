import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_k5kurszentrum.ch_guz', ['https://www.k5kurszentrum.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
