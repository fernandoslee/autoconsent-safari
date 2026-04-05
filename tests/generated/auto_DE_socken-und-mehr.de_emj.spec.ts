import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_socken-und-mehr.de_emj', ['https://www.socken-und-mehr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
