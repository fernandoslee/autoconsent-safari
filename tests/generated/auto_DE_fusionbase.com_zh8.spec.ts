import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fusionbase.com_zh8', ['https://fusionbase.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
