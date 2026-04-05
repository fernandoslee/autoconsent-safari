import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheekkennemerwaard.nl_e1z', ['https://www.bibliotheekkennemerwaard.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
