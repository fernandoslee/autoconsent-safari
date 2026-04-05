import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denkmee.amstelveen.nl_6m2', ['https://denkmee.amstelveen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
