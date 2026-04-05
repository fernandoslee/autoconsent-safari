import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_langer-messmer.de_bso', ['https://www.langer-messmer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
