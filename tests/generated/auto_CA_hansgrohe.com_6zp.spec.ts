import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hansgrohe.com_6zp', ['https://www.hansgrohe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
