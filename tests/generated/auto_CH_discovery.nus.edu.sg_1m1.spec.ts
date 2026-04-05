import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_discovery.nus.edu.sg_1m1', ['https://discovery.nus.edu.sg/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
