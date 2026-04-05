import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoscout24.es_ztv', ['https://www.autoscout24.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
