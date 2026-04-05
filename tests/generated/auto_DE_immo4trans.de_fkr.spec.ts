import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_immo4trans.de_fkr', ['https://www.immo4trans.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
