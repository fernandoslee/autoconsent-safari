import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_thenordicseason.cupmanager.net_piv', ['https://thenordicseason.cupmanager.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
