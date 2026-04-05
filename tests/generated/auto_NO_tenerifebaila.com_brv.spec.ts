import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tenerifebaila.com_brv', ['https://www.tenerifebaila.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
