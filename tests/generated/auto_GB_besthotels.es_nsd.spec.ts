import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_besthotels.es_nsd', ['https://www.besthotels.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
