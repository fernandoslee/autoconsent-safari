import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinetichosting.com_jxh', ['https://www.kinetichosting.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
