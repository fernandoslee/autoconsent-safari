import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_profiles.warwick.ac.uk_f6s', ['https://profiles.warwick.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
