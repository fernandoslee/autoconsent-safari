import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gamingcompare.com_6d6', ['https://gamingcompare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
