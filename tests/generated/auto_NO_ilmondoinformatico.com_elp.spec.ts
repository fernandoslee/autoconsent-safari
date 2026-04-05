import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ilmondoinformatico.com_elp', ['https://ilmondoinformatico.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
