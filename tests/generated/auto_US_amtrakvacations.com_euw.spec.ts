import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amtrakvacations.com_euw', ['https://www.amtrakvacations.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
