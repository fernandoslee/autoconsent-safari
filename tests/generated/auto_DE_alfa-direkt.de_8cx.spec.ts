import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alfa-direkt.de_8cx', ['https://www.alfa-direkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
