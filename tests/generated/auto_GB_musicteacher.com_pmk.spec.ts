import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_musicteacher.com_pmk', ['https://musicteacher.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
