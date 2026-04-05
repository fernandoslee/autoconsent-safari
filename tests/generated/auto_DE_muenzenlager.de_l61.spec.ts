import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_muenzenlager.de_l61', ['https://www.muenzenlager.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
