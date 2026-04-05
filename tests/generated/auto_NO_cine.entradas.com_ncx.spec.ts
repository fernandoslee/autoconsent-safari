import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cine.entradas.com_ncx', ['https://cine.entradas.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
