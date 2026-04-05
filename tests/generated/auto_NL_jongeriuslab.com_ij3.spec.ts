import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jongeriuslab.com_ij3', ['https://jongeriuslab.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
