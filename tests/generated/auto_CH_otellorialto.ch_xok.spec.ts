import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_otellorialto.ch_xok', ['https://otellorialto.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
