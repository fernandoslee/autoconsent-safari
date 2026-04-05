import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mofatanken.ch_nie', ['https://www.mofatanken.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
