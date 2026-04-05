import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_matteboken.se_j9e', ['https://www.matteboken.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
