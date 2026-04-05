import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hematologiegroningen.nl_637', ['https://hematologiegroningen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
