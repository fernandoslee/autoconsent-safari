import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cc-coeurdegaronne.fr_vtc', ['https://www.cc-coeurdegaronne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
