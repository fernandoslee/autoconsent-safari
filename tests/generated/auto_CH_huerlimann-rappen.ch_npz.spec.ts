import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_huerlimann-rappen.ch_npz', ['https://www.huerlimann-rappen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
