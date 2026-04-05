import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rpelectronics.com_nmz', ['https://www.rpelectronics.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
