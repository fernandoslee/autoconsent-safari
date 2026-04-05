import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_miaminewtimes.com_pzn', ['https://www.miaminewtimes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
