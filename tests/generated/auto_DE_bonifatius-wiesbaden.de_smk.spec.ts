import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonifatius-wiesbaden.de_smk', ['https://www.bonifatius-wiesbaden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
