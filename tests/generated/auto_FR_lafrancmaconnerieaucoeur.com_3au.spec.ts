import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafrancmaconnerieaucoeur.com_3au', ['https://www.lafrancmaconnerieaucoeur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
