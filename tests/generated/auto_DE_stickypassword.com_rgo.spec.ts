import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stickypassword.com_rgo', ['https://www.stickypassword.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
