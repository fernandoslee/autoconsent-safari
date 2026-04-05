import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leuzinger-generalbau.ch_ze8', ['https://www.leuzinger-generalbau.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
