import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catedraldesevilla.es_qcb', ['https://www.catedraldesevilla.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
