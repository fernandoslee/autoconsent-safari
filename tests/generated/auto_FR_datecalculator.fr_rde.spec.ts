import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_datecalculator.fr_rde', ['https://www.datecalculator.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
