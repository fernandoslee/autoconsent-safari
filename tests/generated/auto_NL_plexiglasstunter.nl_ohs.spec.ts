import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plexiglasstunter.nl_ohs', ['https://www.plexiglasstunter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
