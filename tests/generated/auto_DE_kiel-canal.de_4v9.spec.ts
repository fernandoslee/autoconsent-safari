import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kiel-canal.de_4v9', ['https://www.kiel-canal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
