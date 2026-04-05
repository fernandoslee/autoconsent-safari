import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_memoiredencrier.com_kwd', ['https://memoiredencrier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
