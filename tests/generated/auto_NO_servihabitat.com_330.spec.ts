import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_servihabitat.com_330', ['https://www.servihabitat.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
