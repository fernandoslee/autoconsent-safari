import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archeoroma.fr_wqj', ['https://www.archeoroma.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
