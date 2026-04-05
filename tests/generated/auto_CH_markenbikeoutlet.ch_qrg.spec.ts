import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_markenbikeoutlet.ch_qrg', ['https://www.markenbikeoutlet.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
