import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_learn.dropbox.com_yr3', ['https://learn.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
