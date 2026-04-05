import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ev-kirche-stuttgart-vaihingen.de_oyc', ['https://www.ev-kirche-stuttgart-vaihingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
