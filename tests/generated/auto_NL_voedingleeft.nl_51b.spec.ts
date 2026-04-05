import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_voedingleeft.nl_51b', ['https://voedingleeft.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
