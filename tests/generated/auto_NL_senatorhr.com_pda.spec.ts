import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_senatorhr.com_pda', ['https://www.senatorhr.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
