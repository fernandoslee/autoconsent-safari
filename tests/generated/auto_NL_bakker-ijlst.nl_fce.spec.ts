import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bakker-ijlst.nl_fce', ['https://bakker-ijlst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
