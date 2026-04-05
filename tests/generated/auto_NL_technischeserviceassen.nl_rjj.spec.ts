import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_technischeserviceassen.nl_rjj', ['https://technischeserviceassen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
