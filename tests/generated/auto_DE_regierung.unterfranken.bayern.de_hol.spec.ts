import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.unterfranken.bayern.de_hol', ['https://www.regierung.unterfranken.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
