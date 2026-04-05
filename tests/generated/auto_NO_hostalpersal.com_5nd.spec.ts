import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hostalpersal.com_5nd', ['https://www.hostalpersal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
