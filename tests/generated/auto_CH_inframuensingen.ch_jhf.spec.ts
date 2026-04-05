import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_inframuensingen.ch_jhf', ['https://www.inframuensingen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
