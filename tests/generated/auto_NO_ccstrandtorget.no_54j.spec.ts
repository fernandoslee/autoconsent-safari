import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ccstrandtorget.no_54j', ['https://www.ccstrandtorget.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
