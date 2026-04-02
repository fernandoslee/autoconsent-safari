import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pixartprinting.fr_in5', ['https://www.pixartprinting.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
