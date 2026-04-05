import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pinacoteca-agnelli.it_ry3', ['https://www.pinacoteca-agnelli.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
