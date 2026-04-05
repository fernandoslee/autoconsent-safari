import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_calgary-real-estate.com_tet', ['https://www.calgary-real-estate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
