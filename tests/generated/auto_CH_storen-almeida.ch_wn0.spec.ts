import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_storen-almeida.ch_wn0', ['https://www.storen-almeida.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
