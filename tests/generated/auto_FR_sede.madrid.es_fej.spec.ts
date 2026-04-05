import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sede.madrid.es_fej', ['https://sede.madrid.es/portal/site/tramites'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
