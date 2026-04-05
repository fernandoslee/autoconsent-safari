import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camiceriaolga.it_w38', ['https://www.camiceriaolga.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
