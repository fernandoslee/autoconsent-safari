import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chili-plants.com_ch9', ['https://chili-plants.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
