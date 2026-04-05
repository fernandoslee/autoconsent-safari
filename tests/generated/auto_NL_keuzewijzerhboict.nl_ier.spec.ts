import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keuzewijzerhboict.nl_ier', ['https://keuzewijzerhboict.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
