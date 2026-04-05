import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenix-cycles.de_1ku', ['https://www.phoenix-cycles.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
