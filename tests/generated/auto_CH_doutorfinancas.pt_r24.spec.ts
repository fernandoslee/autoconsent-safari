import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_doutorfinancas.pt_r24', ['https://www.doutorfinancas.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
