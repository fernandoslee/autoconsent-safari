import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_albaniereizen.nl_vqd', ['https://www.albaniereizen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
