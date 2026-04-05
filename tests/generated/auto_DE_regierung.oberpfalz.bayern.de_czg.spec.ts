import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.oberpfalz.bayern.de_czg', ['https://www.regierung.oberpfalz.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
