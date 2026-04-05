import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sager-2rad.ch_4sl', ['https://www.sager-2rad.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
