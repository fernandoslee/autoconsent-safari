import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_staatvandienst.nl_5ac', ['https://www.staatvandienst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
