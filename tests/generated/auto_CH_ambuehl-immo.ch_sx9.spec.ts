import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ambuehl-immo.ch_sx9', ['https://ambuehl-immo.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
