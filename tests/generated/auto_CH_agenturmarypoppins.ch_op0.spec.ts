import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_agenturmarypoppins.ch_op0', ['https://www.agenturmarypoppins.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
