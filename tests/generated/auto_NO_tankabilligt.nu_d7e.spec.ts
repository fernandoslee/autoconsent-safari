import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tankabilligt.nu_d7e', ['https://tankabilligt.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
