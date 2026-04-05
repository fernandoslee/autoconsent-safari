import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_piccantino.de_tsb', ['https://www.piccantino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
