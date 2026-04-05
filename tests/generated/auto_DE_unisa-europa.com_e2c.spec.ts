import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unisa-europa.com_e2c', ['https://www.unisa-europa.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
