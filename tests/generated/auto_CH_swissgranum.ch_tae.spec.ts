import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgranum.ch_tae', ['https://www.swissgranum.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
