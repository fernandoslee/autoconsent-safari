import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_studiobambacht.nl_th7', ['https://www.studiobambacht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
