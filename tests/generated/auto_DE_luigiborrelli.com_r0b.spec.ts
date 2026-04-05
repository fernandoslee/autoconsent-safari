import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_luigiborrelli.com_r0b', ['https://www.luigiborrelli.com/it'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
