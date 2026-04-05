import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitkopvanholland.nl_67g', ['https://visitkopvanholland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
