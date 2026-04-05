import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_profiles.louisville.edu_xxd', ['https://profiles.louisville.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
