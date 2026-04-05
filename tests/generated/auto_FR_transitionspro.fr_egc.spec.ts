import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_transitionspro.fr_egc', ['https://www.transitionspro.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
