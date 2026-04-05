import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_profiles.ljmu.ac.uk_of5', ['https://profiles.ljmu.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
