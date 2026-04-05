import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tillskararakademin.com_m9b', ['https://www.tillskararakademin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
