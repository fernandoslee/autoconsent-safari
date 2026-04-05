import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_roadtripbeaver.com_nqj', ['https://roadtripbeaver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
