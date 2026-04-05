import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_simplifiedbuilding.com_3gr', ['https://www.simplifiedbuilding.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
