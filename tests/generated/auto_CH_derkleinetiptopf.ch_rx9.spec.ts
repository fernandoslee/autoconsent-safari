import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_derkleinetiptopf.ch_rx9', ['https://derkleinetiptopf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
