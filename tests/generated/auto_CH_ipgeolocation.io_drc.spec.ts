import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ipgeolocation.io_drc', ['https://ipgeolocation.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
