import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sverigesradio.se_l12', ['https://www.sverigesradio.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
