import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pixartprinting.fr_r0h', ['https://www.pixartprinting.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
