import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dahuasecurity.com_cmm', ['https://www.dahuasecurity.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
