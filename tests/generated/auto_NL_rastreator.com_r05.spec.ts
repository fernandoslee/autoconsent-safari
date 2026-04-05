import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rastreator.com_r05', ['https://www.rastreator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
