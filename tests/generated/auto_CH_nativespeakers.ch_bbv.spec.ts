import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nativespeakers.ch_bbv', ['https://www.nativespeakers.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
