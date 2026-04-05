import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daad-akademie.de_602', ['https://www.daad-akademie.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
