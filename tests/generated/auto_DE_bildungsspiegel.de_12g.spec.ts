import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildungsspiegel.de_12g', ['https://www.bildungsspiegel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
