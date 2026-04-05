import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_modellbauversand.com_e4s', ['https://modellbauversand.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
