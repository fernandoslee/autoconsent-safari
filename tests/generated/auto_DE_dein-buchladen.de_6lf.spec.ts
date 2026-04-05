import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dein-buchladen.de_6lf', ['https://www.dein-buchladen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
