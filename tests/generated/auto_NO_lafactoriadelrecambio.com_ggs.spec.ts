import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lafactoriadelrecambio.com_ggs', ['https://www.lafactoriadelrecambio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
