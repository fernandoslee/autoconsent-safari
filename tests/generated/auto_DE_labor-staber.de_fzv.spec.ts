import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labor-staber.de_fzv', ['https://www.labor-staber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
