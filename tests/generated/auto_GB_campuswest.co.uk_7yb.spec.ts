import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_campuswest.co.uk_7yb', ['https://www.campuswest.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
