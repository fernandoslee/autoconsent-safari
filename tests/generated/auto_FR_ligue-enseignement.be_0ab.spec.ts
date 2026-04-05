import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ligue-enseignement.be_0ab', ['https://ligue-enseignement.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
