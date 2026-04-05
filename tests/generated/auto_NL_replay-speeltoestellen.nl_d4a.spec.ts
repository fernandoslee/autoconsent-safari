import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_replay-speeltoestellen.nl_d4a', ['https://www.replay-speeltoestellen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
