import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onestopgrowshop.co.uk_fvq', ['https://www.onestopgrowshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
