import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_garten-planer.app_emm', ['https://garten-planer.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
