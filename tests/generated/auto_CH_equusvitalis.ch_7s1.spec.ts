import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_equusvitalis.ch_7s1', ['https://www.equusvitalis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
