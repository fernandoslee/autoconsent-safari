import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.niederbayern.bayern.de_fg6', ['https://www.regierung.niederbayern.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
