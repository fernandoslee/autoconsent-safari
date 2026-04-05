import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fachstelle-gottesdienst.de_2l6', ['https://www.fachstelle-gottesdienst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
