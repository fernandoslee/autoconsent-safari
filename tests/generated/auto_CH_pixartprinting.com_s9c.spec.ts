import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pixartprinting.com_s9c', ['https://www.pixartprinting.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
