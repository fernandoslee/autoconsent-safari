import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ddrbildarchiv.de_jfb', ['https://www.ddrbildarchiv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
