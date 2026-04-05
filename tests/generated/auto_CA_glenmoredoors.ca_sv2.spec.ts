import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_glenmoredoors.ca_sv2', ['https://glenmoredoors.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
