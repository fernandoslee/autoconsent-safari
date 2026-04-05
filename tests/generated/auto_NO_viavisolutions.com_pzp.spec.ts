import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_viavisolutions.com_pzp', ['https://www.viavisolutions.com/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
