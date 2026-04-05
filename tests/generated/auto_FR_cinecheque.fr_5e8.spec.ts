import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinecheque.fr_5e8', ['https://www.cinecheque.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
