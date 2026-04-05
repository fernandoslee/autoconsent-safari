import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bikeprofis.de_jce', ['https://www.bikeprofis.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
