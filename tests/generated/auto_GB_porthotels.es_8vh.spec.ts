import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_porthotels.es_8vh', ['https://www.porthotels.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
