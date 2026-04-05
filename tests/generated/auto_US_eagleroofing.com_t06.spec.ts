import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eagleroofing.com_t06', ['https://eagleroofing.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
