import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_liebeslust.de_tbu', ['https://www.liebeslust.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
