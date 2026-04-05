import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oda-sozialberufe-zh.ch_080', ['https://www.oda-sozialberufe-zh.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
