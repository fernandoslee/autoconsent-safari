import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_treycovagnes.ch_toy', ['https://treycovagnes.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
