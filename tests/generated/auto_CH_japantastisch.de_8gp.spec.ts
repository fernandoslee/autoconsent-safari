import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_japantastisch.de_8gp', ['https://japantastisch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
