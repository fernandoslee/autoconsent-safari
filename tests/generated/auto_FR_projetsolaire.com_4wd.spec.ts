import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_projetsolaire.com_4wd', ['https://projetsolaire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
