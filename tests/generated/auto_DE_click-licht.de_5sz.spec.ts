import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_click-licht.de_5sz', ['https://www.click-licht.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
