import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_app.universitedelepargne.fr_ous', ['https://app.universitedelepargne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
