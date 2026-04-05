import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kammarkollegiet.se_77b', ['https://www.kammarkollegiet.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
