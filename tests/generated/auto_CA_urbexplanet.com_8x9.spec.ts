import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_urbexplanet.com_8x9', ['https://urbexplanet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
