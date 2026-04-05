import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recrutement.axa.fr_kf4', ['https://recrutement.axa.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
