import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rototweewielers.nl_zm4', ['https://rototweewielers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
