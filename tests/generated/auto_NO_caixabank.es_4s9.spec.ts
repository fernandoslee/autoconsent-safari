import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_caixabank.es_4s9', ['https://www.caixabank.es/particular/home/particulares_es.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
