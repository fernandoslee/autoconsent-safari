import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spitzen-whisky.de_40a', ['https://spitzen-whisky.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
