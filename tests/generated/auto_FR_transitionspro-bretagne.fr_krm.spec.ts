import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_transitionspro-bretagne.fr_krm', ['https://www.transitionspro-bretagne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
