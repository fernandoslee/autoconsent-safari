import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schlauchzentrale.de_9qf', ['https://www.schlauchzentrale.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
