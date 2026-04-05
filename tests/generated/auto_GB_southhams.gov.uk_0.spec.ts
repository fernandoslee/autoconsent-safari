import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southhams.gov.uk_0', ['https://www.southhams.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
