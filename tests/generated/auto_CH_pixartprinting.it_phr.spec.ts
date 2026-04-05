import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pixartprinting.it_phr', ['https://www.pixartprinting.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
