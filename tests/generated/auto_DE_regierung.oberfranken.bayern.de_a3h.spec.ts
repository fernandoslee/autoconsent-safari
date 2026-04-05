import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.oberfranken.bayern.de_a3h', ['https://www.regierung.oberfranken.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
