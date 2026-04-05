import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blm.de_5up', ['https://www.blm.de/de/startseite.cfm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
