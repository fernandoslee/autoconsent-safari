import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_angehoerige-pflegen.de_1mw', ['https://www.angehoerige-pflegen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
