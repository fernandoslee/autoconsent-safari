import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjallsport.se_z1r', ['https://www.fjallsport.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
