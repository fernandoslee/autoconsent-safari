import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_homeenergy.co.uk_n3u', ['https://www.homeenergy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
