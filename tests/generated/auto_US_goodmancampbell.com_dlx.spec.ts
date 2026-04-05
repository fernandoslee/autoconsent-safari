import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_goodmancampbell.com_dlx', ['https://www.goodmancampbell.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
