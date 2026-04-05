import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_correos.es_mfj', ['https://www.correos.es/es/es/particulares'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
