import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_2fa.uni-marburg.de_mmr', ['https://2fa.uni-marburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
