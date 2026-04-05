import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cosmeterie.ch_8v9', ['https://www.cosmeterie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
