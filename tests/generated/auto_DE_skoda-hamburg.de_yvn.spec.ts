import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skoda-hamburg.de_yvn', ['https://www.skoda-hamburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
