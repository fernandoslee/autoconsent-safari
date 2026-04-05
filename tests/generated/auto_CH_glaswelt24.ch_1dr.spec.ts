import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_glaswelt24.ch_1dr', ['https://www.glaswelt24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
