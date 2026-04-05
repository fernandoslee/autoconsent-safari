import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brightonfestival.org_m1h', ['https://brightonfestival.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
