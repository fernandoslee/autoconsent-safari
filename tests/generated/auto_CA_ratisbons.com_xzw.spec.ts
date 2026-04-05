import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ratisbons.com_xzw', ['https://www.ratisbons.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
