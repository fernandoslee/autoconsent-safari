import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_museostabio.ch_xhl', ['https://www.museostabio.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
