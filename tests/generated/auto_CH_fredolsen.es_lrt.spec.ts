import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fredolsen.es_lrt', ['https://www.fredolsen.es/es'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
