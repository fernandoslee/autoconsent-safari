import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deafsluitdijk.nl_afr', ['https://deafsluitdijk.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
