import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_techniquesdelevage.fr_1pf', ['https://www.techniquesdelevage.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
