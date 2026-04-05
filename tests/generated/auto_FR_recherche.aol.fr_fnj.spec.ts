import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recherche.aol.fr_fnj', ['https://recherche.aol.fr/?guccounter=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
