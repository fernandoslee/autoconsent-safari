import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_iberinform.es_n8a', ['https://www.iberinform.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
