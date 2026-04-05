import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vergleichen-und-sparen.de_7i6', ['https://www.vergleichen-und-sparen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
