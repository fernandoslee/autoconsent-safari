import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ca-autobank.fr_238', ['https://www.ca-autobank.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
