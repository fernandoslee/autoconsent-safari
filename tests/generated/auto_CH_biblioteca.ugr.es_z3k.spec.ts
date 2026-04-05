import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biblioteca.ugr.es_z3k', ['https://biblioteca.ugr.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
