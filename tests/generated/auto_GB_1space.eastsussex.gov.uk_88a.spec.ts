import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_1space.eastsussex.gov.uk_88a', ['https://1space.eastsussex.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
