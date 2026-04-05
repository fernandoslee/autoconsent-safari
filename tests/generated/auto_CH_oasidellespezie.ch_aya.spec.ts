import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oasidellespezie.ch_aya', ['https://oasidellespezie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
