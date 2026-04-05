import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rabattkungen.se_isd', ['https://www.rabattkungen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
