import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_benditospoiler.com_2ih', ['https://benditospoiler.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
