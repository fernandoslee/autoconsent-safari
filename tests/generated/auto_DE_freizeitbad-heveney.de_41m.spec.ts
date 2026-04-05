import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freizeitbad-heveney.de_41m', ['https://freizeitbad-heveney.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
