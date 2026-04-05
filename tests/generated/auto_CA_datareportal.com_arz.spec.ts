import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_datareportal.com_arz', ['https://datareportal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
