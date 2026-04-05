import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_karriere.atruvia.de_axw', ['https://karriere.atruvia.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
