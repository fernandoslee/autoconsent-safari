import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scootmobiel.net_nyt', ['https://scootmobiel.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
