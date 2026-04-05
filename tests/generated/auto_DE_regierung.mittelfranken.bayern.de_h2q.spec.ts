import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.mittelfranken.bayern.de_h2q', ['https://www.regierung.mittelfranken.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
