import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-osnabrueck.de_x8k', ['https://www.hs-osnabrueck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
