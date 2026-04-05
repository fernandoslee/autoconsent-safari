import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kgtrimning.org_k7d', ['https://www.kgtrimning.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
