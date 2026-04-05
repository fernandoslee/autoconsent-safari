import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medienkompass.de_bzf', ['https://www.medienkompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
