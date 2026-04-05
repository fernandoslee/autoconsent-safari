import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_garage-kloetzli.ch_o80', ['https://www.garage-kloetzli.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
