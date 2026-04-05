import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cima.aemps.es_8lt', ['https://cima.aemps.es/cima/publico/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
