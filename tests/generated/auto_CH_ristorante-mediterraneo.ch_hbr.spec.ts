import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ristorante-mediterraneo.ch_hbr', ['https://www.ristorante-mediterraneo.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
