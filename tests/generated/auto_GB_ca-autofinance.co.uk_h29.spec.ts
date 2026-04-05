import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ca-autofinance.co.uk_h29', ['https://www.ca-autofinance.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
