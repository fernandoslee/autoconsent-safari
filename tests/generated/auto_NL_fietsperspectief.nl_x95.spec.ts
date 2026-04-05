import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fietsperspectief.nl_x95', ['https://fietsperspectief.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
