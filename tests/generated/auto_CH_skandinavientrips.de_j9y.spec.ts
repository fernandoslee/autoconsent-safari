import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_skandinavientrips.de_j9y', ['https://www.skandinavientrips.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
