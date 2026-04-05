import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_icc-cricket.com_mbf', ['https://www.icc-cricket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
