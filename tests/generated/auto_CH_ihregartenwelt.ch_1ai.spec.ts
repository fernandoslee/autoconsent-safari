import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihregartenwelt.ch_1ai', ['https://www.ihregartenwelt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
