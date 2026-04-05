import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ontwerpacademie.nl_3z2', ['https://www.ontwerpacademie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
