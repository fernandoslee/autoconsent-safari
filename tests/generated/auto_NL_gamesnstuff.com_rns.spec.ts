import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gamesnstuff.com_rns', ['https://gamesnstuff.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
