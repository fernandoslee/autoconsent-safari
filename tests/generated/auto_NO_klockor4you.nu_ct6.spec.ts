import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klockor4you.nu_ct6', ['https://www.klockor4you.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
