import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geschichten-die-zaehlen.de_tsf', ['https://www.geschichten-die-zaehlen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
