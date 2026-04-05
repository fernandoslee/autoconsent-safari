import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijnkoffiemachine.nl_47p', ['https://mijnkoffiemachine.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
