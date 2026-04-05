import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_madrid.es_9cg', ['https://www.madrid.es/portal/site/munimadrid'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
