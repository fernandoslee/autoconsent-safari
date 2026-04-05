import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cubestore-weinfelden.ch_771', ['https://www.cubestore-weinfelden.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
