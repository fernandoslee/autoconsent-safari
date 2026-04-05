import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_patrimonioactivocyl.es_692', ['https://www.patrimonioactivocyl.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
