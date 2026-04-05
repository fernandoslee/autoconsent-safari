import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_charlotteslaw.nl_kaq', ['https://www.charlotteslaw.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
