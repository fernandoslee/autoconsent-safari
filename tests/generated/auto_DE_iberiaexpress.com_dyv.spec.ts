import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_iberiaexpress.com_dyv', ['https://www.iberiaexpress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
