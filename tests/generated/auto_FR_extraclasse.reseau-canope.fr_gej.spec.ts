import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_extraclasse.reseau-canope.fr_gej', ['https://extraclasse.reseau-canope.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
