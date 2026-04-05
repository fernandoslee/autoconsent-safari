import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweitzer-online.de_0v0', ['https://www.schweitzer-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
