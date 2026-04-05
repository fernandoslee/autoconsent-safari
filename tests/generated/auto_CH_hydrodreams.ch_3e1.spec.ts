import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hydrodreams.ch_3e1', ['https://www.hydrodreams.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
