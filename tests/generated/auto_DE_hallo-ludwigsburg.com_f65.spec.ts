import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hallo-ludwigsburg.com_f65', ['https://www.hallo-ludwigsburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
