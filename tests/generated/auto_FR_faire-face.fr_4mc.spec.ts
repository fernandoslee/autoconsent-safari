import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_faire-face.fr_4mc', ['https://www.faire-face.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
