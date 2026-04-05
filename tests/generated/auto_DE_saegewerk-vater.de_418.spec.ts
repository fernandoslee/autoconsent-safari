import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saegewerk-vater.de_418', ['https://www.saegewerk-vater.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
