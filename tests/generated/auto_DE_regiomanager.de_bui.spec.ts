import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regiomanager.de_bui', ['https://www.regiomanager.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
