import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labor-muenster.de_ac1', ['https://www.labor-muenster.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
