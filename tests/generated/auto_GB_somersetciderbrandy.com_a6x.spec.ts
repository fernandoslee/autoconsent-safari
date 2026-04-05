import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_somersetciderbrandy.com_a6x', ['https://somersetciderbrandy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
