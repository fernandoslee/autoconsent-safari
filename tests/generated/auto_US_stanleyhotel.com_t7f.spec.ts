import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_stanleyhotel.com_t7f', ['https://www.stanleyhotel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
