import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ev-kirche-talheim.de_9nf', ['https://www.ev-kirche-talheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
