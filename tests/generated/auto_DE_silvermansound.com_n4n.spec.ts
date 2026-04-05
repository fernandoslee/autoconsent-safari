import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_silvermansound.com_n4n', ['https://www.silvermansound.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
