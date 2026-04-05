import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oshop-network.de_bzi', ['https://www.oshop-network.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
