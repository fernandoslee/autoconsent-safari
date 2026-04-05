import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_caixabank.es_biz', ['https://www.caixabank.es/particular/home/particulares_es.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
