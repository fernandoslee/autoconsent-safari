import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tintenshop365.de_adh', ['https://www.tintenshop365.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
