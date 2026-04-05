import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_prestaciones.seg-social.es_46t', ['https://prestaciones.seg-social.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
