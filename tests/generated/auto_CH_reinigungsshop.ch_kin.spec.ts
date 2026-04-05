import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reinigungsshop.ch_kin', ['https://www.reinigungsshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
