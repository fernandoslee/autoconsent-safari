import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_comparador.cnmc.gob.es_xlk', ['https://comparador.cnmc.gob.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
