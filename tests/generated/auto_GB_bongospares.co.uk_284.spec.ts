import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bongospares.co.uk_284', ['https://bongospares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
