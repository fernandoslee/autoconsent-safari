import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_burgen-und-schloesser.de_0q8', ['https://burgen-und-schloesser.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
