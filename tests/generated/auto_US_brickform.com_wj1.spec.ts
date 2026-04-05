import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brickform.com_wj1', ['https://www.brickform.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
