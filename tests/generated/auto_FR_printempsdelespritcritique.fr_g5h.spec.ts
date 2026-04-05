import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_printempsdelespritcritique.fr_g5h', ['https://www.printempsdelespritcritique.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
