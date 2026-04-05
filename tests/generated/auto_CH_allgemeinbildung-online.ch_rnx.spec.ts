import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_allgemeinbildung-online.ch_rnx', ['https://www.allgemeinbildung-online.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
