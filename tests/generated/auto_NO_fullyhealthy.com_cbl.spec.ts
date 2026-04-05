import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fullyhealthy.com_cbl', ['https://fullyhealthy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
