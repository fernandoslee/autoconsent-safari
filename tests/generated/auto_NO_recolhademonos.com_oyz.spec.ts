import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_recolhademonos.com_oyz', ['https://www.recolhademonos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
