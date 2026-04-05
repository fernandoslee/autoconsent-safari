import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekra.com_ln9', ['https://www.dekra.com/en/home/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
