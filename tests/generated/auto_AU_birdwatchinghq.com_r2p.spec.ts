import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_birdwatchinghq.com_r2p', ['https://birdwatchinghq.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
