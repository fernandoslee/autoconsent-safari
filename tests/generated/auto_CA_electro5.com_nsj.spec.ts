import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_electro5.com_nsj', ['https://www.electro5.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
