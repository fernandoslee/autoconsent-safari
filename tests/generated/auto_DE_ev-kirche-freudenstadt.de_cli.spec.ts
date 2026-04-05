import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ev-kirche-freudenstadt.de_cli', ['https://www.ev-kirche-freudenstadt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
