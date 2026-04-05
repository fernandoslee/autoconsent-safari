import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_outreachzutphen.nl_3t2', ['https://outreachzutphen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
