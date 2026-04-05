import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ravensburger.it_8lu', ['https://www.ravensburger.it/it-IT/ravensburger'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
