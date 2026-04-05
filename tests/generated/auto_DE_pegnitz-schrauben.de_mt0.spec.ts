import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pegnitz-schrauben.de_mt0', ['https://www.pegnitz-schrauben.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
