import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eurostarshotels.de_4ll', ['https://www.eurostarshotels.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
