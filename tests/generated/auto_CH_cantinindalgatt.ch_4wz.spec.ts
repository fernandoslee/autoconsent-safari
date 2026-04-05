import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cantinindalgatt.ch_4wz', ['https://www.cantinindalgatt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
