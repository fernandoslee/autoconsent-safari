import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lehrmittel-vierkant.de_n08', ['https://lehrmittel-vierkant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
