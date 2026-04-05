import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ecco-verde.de_zww', ['https://www.ecco-verde.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
