import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flexinplex.nl_mp8', ['https://www.flexinplex.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
