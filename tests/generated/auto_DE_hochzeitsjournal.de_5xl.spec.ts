import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hochzeitsjournal.de_5xl', ['https://www.hochzeitsjournal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
