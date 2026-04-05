import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_participe-amstelland.nu_885', ['https://www.participe-amstelland.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
