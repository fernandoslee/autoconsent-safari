import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pinacoteca-agnelli.it_fw0', ['https://www.pinacoteca-agnelli.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
