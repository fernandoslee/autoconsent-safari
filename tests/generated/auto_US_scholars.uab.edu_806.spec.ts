import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_scholars.uab.edu_806', ['https://scholars.uab.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
