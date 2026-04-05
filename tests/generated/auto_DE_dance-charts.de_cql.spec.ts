import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dance-charts.de_cql', ['https://www.dance-charts.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
