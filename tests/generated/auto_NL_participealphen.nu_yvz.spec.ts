import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_participealphen.nu_yvz', ['https://www.participealphen.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
