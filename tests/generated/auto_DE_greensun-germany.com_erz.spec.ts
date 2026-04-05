import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_greensun-germany.com_erz', ['https://www.greensun-germany.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
