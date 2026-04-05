import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_consultaespiritual.es_wyh', ['https://consultaespiritual.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
