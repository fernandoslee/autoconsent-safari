import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_equalpartner.ch_y2t', ['https://equalpartner.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
