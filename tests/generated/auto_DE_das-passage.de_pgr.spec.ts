import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_das-passage.de_pgr', ['https://www.das-passage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
