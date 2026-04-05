import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chocolatestorras.com_0y1', ['https://chocolatestorras.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
