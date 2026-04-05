import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alhambra-patronato.es_9z3', ['https://www.alhambra-patronato.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
