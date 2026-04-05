import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_banco.bradesco_qfu', ['https://banco.bradesco/html/classic/index.shtm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
