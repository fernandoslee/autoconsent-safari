import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bushplanet.com_jfh', ['https://www.bushplanet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
