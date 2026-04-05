import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kg-altdorf.ch_8t9', ['https://www.kg-altdorf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
