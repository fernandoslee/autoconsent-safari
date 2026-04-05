import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pinet-industrie.com_8m8', ['https://www.pinet-industrie.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
