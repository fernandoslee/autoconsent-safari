import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_allpartsconnected.com_kyi', ['https://www.allpartsconnected.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
