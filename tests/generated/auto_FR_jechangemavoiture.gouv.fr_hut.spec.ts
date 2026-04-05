import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jechangemavoiture.gouv.fr_hut', ['https://jechangemavoiture.gouv.fr/jcmv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
