import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_palais-decouverte.fr_x8m', ['https://www.palais-decouverte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
