import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labor-becker.de_df7', ['https://www.labor-becker.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
