import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eventtechnik3000.ch_3ww', ['https://www.eventtechnik3000.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
